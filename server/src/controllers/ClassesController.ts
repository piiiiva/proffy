import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  async index(request: Request, response: Response) {
    const filters = request.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if(!filters.week_day || !filters.subject || !filters.time) {
      return response.status(400).json({
        error: 'Missing filters to search classes'
      })
    };

    // O usuário digita o valor em horas 09:00, temos que transformar em minutos 540 para o db entender
    const timeInMinutes = convertHourToMinutes(time);

    const classes = await db('classes')
      .whereExists(function() { // subquery para verificar se existe um horário disponível
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`') // JOIN
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)]) // Verificar se atende no dia
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes]) // Verifica o horário que o proffy começa a trabalhar
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]) // Verifica o horário que o proffy para a trabalhar

      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id') // INNER JOIN
      .select(['classes.*', 'users.*']);

    console.log(timeInMinutes);

    return response.json(classes);
  }

  async create(request: Request, response: Response) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;
  
    const trx = await db.transaction();
  
    try {
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });
    
      const user_id = insertedUsersIds[0];
    
      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id,
      });
    
      const class_id = insertedClassesIds[0];
    
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      });
    
      await trx('class_schedule').insert(classSchedule);
    
      await trx.commit();
    
      return response.status(201).send();
    } catch (err) {
      await trx.rollback();
  
      return response.status(400).json({
        error: 'Unexpected error while creating new class'
      })
    }
  }
}
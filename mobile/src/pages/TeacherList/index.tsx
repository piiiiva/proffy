import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Picker } from 'react-native';
// import { Picker } from '@react-native-community/picker';
import PageHeader from '../../components/PageHeader';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('Selecione');
  const [week_day, setWeekDay] = useState('Selecione');
  const [time, setTime] = useState('XX:XX');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers =JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id
        })
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  })

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();

    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#FFF" />
          </BorderlessButton>
        )}
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <View style={styles.pickerSelect}>
              <Picker
                style={{ color: '#c1bccc' }}
                selectedValue={subject}
                onValueChange={(itemValue, itemIndex) =>
                  setSubject(String(itemValue))
                }
                itemStyle={{ backgroundColor: 'grey' }}
              >
                <Picker.Item label="Artes" value="artes" />
                <Picker.Item label="Biologia" value="biologia" />
                <Picker.Item label="Ciência" value="ciencia" />
                <Picker.Item label="Química" value="quimica" />
                <Picker.Item label="Física" value="fisica" />
                <Picker.Item label="Matemática" value="matematica" />
                <Picker.Item label="Português" value="portugues" />
              </Picker>
            </View>

            {/* <TextInput
              style={styles.input}
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder="Qual a matéria?"
              placeholderTextColor="#c1bccc"
            /> */}
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <View style={styles.pickerSelect}>
                  <Picker
                    style={{ color: '#c1bccc' }}
                    selectedValue={week_day}
                    onValueChange={(itemValue, itemIndex) =>
                      setWeekDay(String(itemValue))
                    }
                    itemStyle={{ backgroundColor: 'grey' }}
                  >
                    <Picker.Item label="Domingo" value="0" />
                    <Picker.Item label="Segunda-feira" value="1" />
                    <Picker.Item label="Terça-feira" value="2" />
                    <Picker.Item label="Quarta-feira" value="3" />
                    <Picker.Item label="Quinta-feira" value="4" />
                    <Picker.Item label="Sext-feira" value="5" />
                    <Picker.Item label="Sábado" value="6" />
                  </Picker>
                </View>

                {/* <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                /> */}
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholder="Qual horário?"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
              <Text style={styles.submitTextButton}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />)
        })}
      </ScrollView>
    </View>
  )
}

export default TeacherList;
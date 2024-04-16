

import { defineStore } from 'pinia';
import generalImg from '../assets/img/general.png';
import secondImg from '../assets/img/avatar.png';

console.dir(generalImg)

export const useUsersStore = defineStore({
  id: 'users',
  state: () => ({
    users: [
      {
        name: 'Иванов Иван Иванович',
        position: 'Full Stack Developer',
        age: '27 лет',
        photo: [generalImg, generalImg, generalImg],
        address: 'г. Запорожье, ул. Диагональная 14, кв 124',
        familyStatus: 'Женат',
        countChange: '6',
        dateUpdate: '07.09.2019',
        level: 82
      },
      {
        name: 'Сидоров Иван Иванович',
        position: 'Front-End Developer',
        age: '32 года',
        photo: [generalImg],
        address: 'г. Киев, ул. Диагональная 134, кв 4',
        familyStatus: 'Не женат',
        countChange: '3',
        dateUpdate: '10.03.2022',
        level: 63
      },
      {
        name: 'Петров Петр Петрович',
        position: 'Back-End Developer',
        age: '25 лет',
        photo: [generalImg, generalImg, generalImg],
        address: 'г. Запорожье, ул. Диагональная 144, кв 18',
        familyStatus: 'Женат',
        countChange: '2',
        dateUpdate: '07.09.2019',
        level: 82
      },
      {
        name: 'Кулаков Иван Иванович',
        position: 'Должность',
        age: 'Возраст',
        photo: [generalImg],
        address: 'г. Запорожье, ул. Диагональная 14, кв 12',
        familyStatus: 'Женат',
        countChange: '6',
        dateUpdate: '22.12.2019',
        level: 47
      },
      {
        name: 'Иванов Иван Иванович',
        position: 'Chef',
        age: '42 года',
        photo: [generalImg, generalImg, generalImg],
        address: 'г. Запорожье, ул. Диагональная 14, кв 124',
        familyStatus: 'Не женат',
        countChange: '9',
        dateUpdate: '15.09.2017',
        level: 100
      },
    ],
    user: null
  }),
  actions: {
    removeUser(index) {
      if (confirm('Do you want to delete a user?')) this.users.splice(index, 1);// custom modal
      if (this.users[0]) this.user = this.users[0];
      else alert('User list is empty'); // handler + custom modal
    },
    sortUser() {
      this.users.sort((a, b) => a.name.localeCompare(b.name));
    },
    unSortUser() {
      this.users.sort((a, b) => b.name.localeCompare(a.name));
    },
    searchUser(name) {
      this.users.find(o => o.name === name);
    },
    search(nameKey) {

      for (let i = 0; i < this.users.length; i++) {

        if (this.users[i].name.startsWith(nameKey)) {
          this.user = this.users[i];
        }
      }
    }
  }
});

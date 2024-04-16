<template>

  <div class="flex flex-wrap md:max-w-full p-2 md:p-[10%]">
    <div class="md:block md:absolute w-[100%] md:max-w-[412px]">
      <img
        :src="usersStore.user.photo[0]"
        alt=""
        class="rounded-[10px]"
      />
    </div>
    <div class="md:ml-24">
      <ProgressBar :value="usersStore.user.level" />
      <div class="bg-[#F8F9FB] rounded-[15px] md:w-[980px] shadow-md">
        <div class="flex justify-end">
          <div class="grid grid-cols-3 gap-5 max-w-[660px] p-5 md:max-h-[480px] md:p-[35px] md:text-[20px]">
            <div class="col-span-3">
              <div class="flex justify-between border border-transparent border-b-[#F0F0F0] pb-4">
                <div class="border border-transparent border-r-[#F0F0F0] pr-6">
                  <h2>Анкетные данные</h2>
                  <p class="md:text-[16px] pt-2">
                    обновлено:
                    <span class="green pr-8">{{
                        usersStore.user.dateUpdate
                      }}</span>
                    кол-во редакций:
                    <span class="green">{{
                        usersStore.user.countChange
                      }}</span>
                  </p>
                </div>
                <div class="flex flex-wrap">
                  <button @click="modal.show">
                    <img
                      src="../assets/img/user-edit.svg"
                      alt=""
                      class="cursor-pointer"
                    />
                  </button>
                  <button @click="
                        deleteUser(usersStore.users.indexOf(usersStore.user))
                      ">
                    <img
                      src="../assets/img/user-remove.svg"
                      alt=""
                      class="cursor-pointer"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div class="self-center bold">ФИО:</div>
            <div class="col-span-2">{{ usersStore.user.name }}</div>
            <div class="self-center bold">Должность:</div>
            <div class="col-span-2 md:text-[20px]">
              {{ usersStore.user.position }}
            </div>
            <div class="self-center bold">Возраст:</div>
            <div class="col-span-2 md:text-[20px]">
              {{ usersStore.user.age }}
            </div>
            <div class="self-center bold">Адрес:</div>
            <div class="col-span-2 md:text-[20px] self-center">
              {{ usersStore.user.address }}
            </div>
            <div class="self-center bold">Семейное положение:</div>
            <div class="col-span-2 md:text-[20px] self-center">
              {{ usersStore.user.familyStatus }}
            </div>
          </div>
        </div>
        <div class="flex justify-between md:justify-start pb-8 px-4">
          <div
            v-for="(url, i) in usersStore.user.photo"
            :key="i"
            class="rounded-full border-[3px] w-[84px] h-[84px] overflow-hidden border-green-500 cursor-pointer m-3 p-2"
          >
            <img
              :src="url"
              alt=""
              class=""
            />
          </div>
        </div>
      </div>
    </div>
    <UserForm
      :key="usersStore.user"
      :user="usersStore.user"
      :modal="modal"
      buttonText="Редактировать"
      title="Редактировать"
      @submit="onEdit"
    />
  </div>
</template>
<script>
import User from "./User.vue";
import UserForm from "./UserForm.vue";
import ProgressBar from "./ProgressBar.vue";
import { useModal } from "../composables/modal";

import { useUsersStore } from "../stores/users";

export default {
  components: { User, UserForm, ProgressBar },
  setup() {
    const usersStore = useUsersStore();
    const modal = useModal();

    const onEdit = (user) => {
      const index = usersStore.users.findIndex(
        (user) => user === usersStore.user
      );
      if (index !== -1) {
        usersStore.users[index] = usersStore.user = user;
      }
      modal.hide();
    };

    const deleteUser = (index) => {
      usersStore.removeUser(index);
    };

    return { usersStore, modal, onEdit, deleteUser };
  },
};
</script>

<style>
.side {
  -webkit-box-shadow: 13px 1px 10px -16px rgba(145, 145, 145, 1);
  -moz-box-shadow: 13px 1px 10px -16px rgba(145, 145, 145, 1);
  box-shadow: 13px 1px 10px -16px rgba(145, 145, 145, 1);
}
</style>
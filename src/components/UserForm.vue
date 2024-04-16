<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="modal.isVisible"
        class="absolute z-10 inset-0 bg-black/10"
      >
        <div :class="blockClasses">
          <div :class="elementClasses('header')">
            <div>
              <h1>{{ title }}</h1>
            </div>
            <div class="flex justify-between">
              <button
                class="btn-save"
                @click="onSubmit"
              >
                {{ buttonText }}
              </button>

              <button class="btn-close">
                <img
                  src="../assets/img/close.svg"
                  alt=""
                  @click="modal.hide"
                />
              </button>
            </div>
          </div>
          <div :class="elementClasses('content')">
            <h2>Загрузите фото</h2>
            <div class="add-user__photo-group">
              <div
                v-for="index in 3"
                :key="index"
                class="add-user__photo-background"
              >
                <div :class="
                    user.photo[index - 1]
                      ? 'add-user__loaded-img'
                      : 'add-user__load-img'
                  ">
                  <input
                    type="file"
                    accept="image/*"
                    class="inputfile"
                    @change="(e) => handleFileChange(e, index - 1)"
                  />
                </div>
                <div class="flex justify-center">
                  <img
                    v-if="user.photo[index - 1]"
                    :src="user.photo[index - 1]"
                    alt=""
                    class=" h-[14.5rem] "
                  />
                </div>
              </div>
            </div>
          </div>
          <div :class="elementClasses('footer')">
            <h2>Заполните форму</h2>
            <div class="add-user__input-group">
              <div>
                <label for="name">ФИО</label><input
                  type="text"
                  v-model="user.name"
                />
              </div>
              <div><input
                  type="text"
                  v-model="user.position"
                /></div>
              <div><input
                  type="text"
                  v-model="user.age"
                /></div>
              <div class="md:col-span-2">
                <input
                  type="text"
                  v-model="user.address"
                />
              </div>
              <div><input
                  type="text"
                  v-model="user.familyStatus"
                /></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script>
import { computed, defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "AddUser",
  props: {
    modal: {
      type: Object,
    },
    title: {
      type: String,
      default: () => "Новый пользователь",
    },
    buttonText: {
      type: String,
      default: () => "Добавить",
    },
    editMode: {
      type: Boolean,
      default: true,
    },
    user: {
      type: Object,
      default: {
        photo: ['/src/assets/img/general.png'],
        level: 15
      }
    }
  },
  emits: ["submit"],
  setup(props, { emit }) {
    const user = ref(props.user ? { ...props.user } : { photo: [] });

    const handleFileChange = (event, index) => {
      const file = event.target.files[0];
      user.value.photo[index] = URL.createObjectURL(file);
      // should be revoked in real world project
      // URL.revokeObjectURL(user.photo[index])
    };
    const onSubmit = () => {
      emit("submit", user.value);
    };

    const elementClasses = (element) => {
      return `${blockClasses.value}__${element}`;
    };

    const blockClasses = computed(() => "add-user");

    return {
      handleFileChange,
      elementClasses,
      blockClasses,
      onSubmit,
      user,
    };
  },
});
</script>

<style scoped>
h3 {
  letter-spacing: 0.05em;
  font-weight: 400;
  font-size: 20px;
}

.add-user {
  position: absolute;
  z-index: 999;
  left: 595px;
  top: 10px;
  max-width: 1280px;
  width: 100%;
  background-color: #f8f9fb;
  padding: 70px 80px;
  border-radius: 15px;
  shape-rendering: geometricPrecision;
  letter-spacing: 0.03em;
  font-size: 22px;
  -webkit-box-shadow: -13px 1px 30px -14px rgba(145, 145, 145, 1);
  -moz-box-shadow: -13px 1px 30px -14px rgba(145, 145, 145, 1);
  box-shadow: -13px 1px 30px -14px rgba(145, 145, 145, 1);
}

.add-user__header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 90px;
}

.add-user__content {
  padding-bottom: 60px;
}

.add-user__footer {
  gap: 2rem;
}
.btn-save {
  background-color: #28b46f;
  color: white;
  padding: 16px 38px;
  border-radius: 6px;
  box-shadow: rgba(144, 144, 144, 0.2);
  cursor: pointer;
}
.btn-close {
  cursor: pointer;
  margin-left: 50px;
}
.add-user__photo-group {
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding-top: 30px;
}
.add-user__input-group {
  display: grid;
  column-gap: 5rem;
  row-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding-top: 30px;
}
.add-user__photo-background {
  background-color: #f5f5f5;
  position: relative;
  border: 2px #c4c4c4;
  border-style: dashed;
  height: 15rem;
  width: 19rem;
}
.add-user__photo-background:hover,
.add-user__photo-background:active {
  border: 2px dashed #00cf6a;
  cursor: pointer;
}
input {
  position: relative;
  padding: 1rem;
  width: 100%;
  border: 1px solid #9a9a9a;
  border-radius: 12px;
  height: 72px;
  background-color: transparent;
  outline-color: #00cf6a;
}
label {
  font-size: 20px;
  font-weight: bold;
  display: block;
  margin-top: -14px;
  margin-left: 30px;
  background-color: #f8f9fb;
  z-index: 10;
  padding: 5px;
  position: absolute;
  font-size: 14px;
}
.add-user__loaded-img {
  position: absolute;
  margin: auto;
  inset: 0px;
  background-image: url(../assets/img/loaded-img.svg);
  background-repeat: no-repeat;
  background-position: center center;
}
.add-user__load-img {
  position: absolute;
  margin: auto;
  inset: 0px;
  background-image: url(../assets/img/load-img.svg);
  background-repeat: no-repeat;
  background-position: center center;
}
.inputfile {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
}

@media (min-width: 315px) and (max-width: 767px) {
  * {
    font-size: 18px;
  }
  h1 {
    font-size: 24px;
    padding-bottom: 10px;
    text-align: center;
  }
  .add-user__photo-background {
    width: 100%;
  }
  .add-user {
    position: relative;
    left: 0;
    width: 100%;
    height: none;
    padding: 15px;
    shape-rendering: geometricPrecision;
    letter-spacing: 0.03em;
  }
  .add-user__header {
    padding-bottom: 5px;
    display: block;
  }
  .add-user__input-group {
    row-gap: 2rem;
  }
  .add-user__photo-group {
    gap: 2rem;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}
</style>
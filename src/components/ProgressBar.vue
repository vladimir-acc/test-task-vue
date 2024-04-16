<template>
  <div class="flex md:justify-end m-2 md:mb-[55px]">
    <div class="progress-mob">
      <label
        for="file"
        class="relative top-[20px] text-[16px] text-light m-0"
        :style="(value < 20) ? 'visibility:hidden':''"
      >профиль заполнен на</label>
      <p
        class="progress-value"
        :style="'left:'+(value-5)+'%'"
      >
        {{ value }}<small>%</small>
      </p>
      <progress
        id="file"
        max="100"
        :value="value"
      ></progress>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: Number
  }
}
</script>

<style lang="css">
progress[value] {
  --color: linear-gradient(90deg, rgba(1, 169, 140, 1), rgba(0, 207, 106, 1));
  --background: #e0f9ed;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  width: 626px;
  height: 30px;
  border-radius: 10em;
  background: var(--background);
}
progress[value]::-webkit-progress-bar {
  border-radius: 10em;
  background: var(--background);
}
progress[value]::-webkit-progress-value {
  border-radius: 10em;
  background: var(--color);
}
progress[value]::-moz-progress-bar {
  border-radius: 10em;
  background: var(--color);
}

label {
  font-size: 20px;
  font-weight: bold;
  display: block;
  margin: 20px 0;
}
@media (min-width: 315px) and (max-width: 767px) {
  progress[value] {
    width: 100%;
  }
  .progress-mob {
    width: 100%;
  }
}
</style>
<template>
  <div class="panel panel-primary" style="margin-top: 10px">
    <div class="panel-heading">Редактирование новости</div>
    <div class="panel-body">
      <form @submit="handleSubmit">
        <div class="form-group">
          <label for="inputTitle">Новость</label>
          <input type="text" class="form-control" id="inputTitle" v-model="title">
        </div>
        <div class="form-group">
          <label for="inputLink">Ссылка</label>
          <input type="url" class="form-control" id="inputLink" v-model="link">
        </div>
        <div class="form-group">
          <label for="inputTitle">Источник</label>
          <select class="form-control" id="inputSource" v-model="source">
            <option v-for="(source, key) in sources" :value="key">{{ source }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="inputDate">Дата и время</label>
          <input type="date" class="form-control" id="inputDate" v-model="visibleDate">
          <input type="time" class="form-control" id="inputTime" v-model="visibleTime">
        </div>
        <button type="submit" class="btn btn-primary pull-right">Сохранить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditAnnouncement"
}
</script>

<style scoped>

</style>
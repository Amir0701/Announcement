<template>
  <div>
    <HelloWorld/>
  <div class="panel panel-primary" style="margin-top: 10px">
    <div class="panel-body">
      <router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'edit', params: {id: 0}}">
        Добавить
      </router-link>
    </div>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>№</th>
        <th style="width: 40%">Пользователь</th>
        <th style="width: 40px">Товар</th>
        <th style="width: 40px">Город</th>
        <th style="width: 40px">Дата</th>
        <th style="width: 20px"></th>
        <th style="width: 20px"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in rssItems" :key="index">
        <td>{{index + 1}}</td>
        <td><a :href="item.link" target="_blank">{{ item.user.firstName + "  " + item.user.lastName }}</a></td>
        <td><a :href="item.link" target="_blank">{{ item.good.name }}</a></td>
        <td><a :href="item.link" target="_blank">{{ item.city }}</a></td>
        <td><a :href="item.link" target="_blank">{{ item.date }}</a></td>
        <td><router-link role="button" class="btn btn-sm btn-link" :to="{name: 'edit', params: {id: item.id}}">
          <span class="glyphicon glyphicon-pencil">Редактировать</span>
        </router-link></td>
        <td><button type="button" class="btn btn-sm btn-link" @click="handleRemoveClick($event, item.id)">
          <span class="glyphicon glyphicon-remove">Удалить</span>
        </button></td>
      </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapActions,mapState} from 'vuex'
export default {
  name: 'Announcements',
  components: {
    HelloWorld
  },
  mounted() {
    this.$nextTick(async () => {
      await this.initialize();
    });
  },
  methods:{
    async handleRemoveClick(e, id) {
      await this.removeItem(id);
    },
    ...mapActions([
      'initialize',
      'removeItem'
    ])
  },
  computed: {
    ...mapState({
      rssItems: state => state.rssItems
    })
  }
}

</script>

<style scoped>

</style>
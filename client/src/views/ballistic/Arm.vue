<template>
  <b-row>
    <b-col md="4" sm="12" class="ml-auto">
      <b-form-group 
        label="Buscar por exp y clise"
        laber-for="date"
        :horizontal="false">
        <b-form-input @change="search()" v-model="query" type="text" placeholder="Buscar exp y clise"></b-form-input>
      </b-form-group>
    </b-col>
    <b-col cols="12" xl="12">
      <transition name="slide">
      <b-card :header="caption">
        <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
          <template slot="id" slot-scope="data">
            <strong>{{data.item.id}}</strong>
          </template>
          <template slot="imagen" slot-scope="data">
            <b-navbar variant="faded" type="light">
              <b-navbar-brand tag="h1" href="#">
                <img :src="urlImage + '/' + data.item.Evidencium.Imagens[0].nombre_archivo" width="60px" class="img-avatar d-inline-block align-top" alt="BV">
              </b-navbar-brand>
            </b-navbar>
          </template>
          <template slot="exp" slot-scope="data">
            <strong>
            {{data.item.exp}}
            </strong>
          </template>
          <template slot="tipo" slot-scope="data">
            <strong>
            {{data.item.tipo}}
            </strong>
          </template>
          <template slot="color" slot-scope="data">
            <strong>{{data.item.color}}</strong>
          </template>
          <template slot="fecha" slot-scope="data">
            <b-badge>{{data.item.created_at | listDate }}</b-badge>
          </template>
          <template slot="acción" slot-scope="data">
            <b-button @click="generateReport(data.item.id)" variant="primary" class="btn-pill">Reporte</b-button>
            <b-button @click="goToDetail(data.item.evidencia_id)" variant="info" class="btn-pill">Detalles</b-button>
            <b-button v-if="isEnabled(data.item.f_creacion)" @click="goToUpdate(data.item.evidencia_id)" variant="success" class="btn-pill">Actualizar</b-button>
          </template>
        </b-table>
        <nav>
          <b-pagination size="sm" :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
        </nav>
      </b-card>
      </transition>
    </b-col>
  </b-row>
</template>

<script>
import settings from '../../config'
import swal from 'sweetalert'
import store from '../../store/store'
import moment from 'moment'

export default {
  name: 'Usuarios',
  props: {
    caption: {
      type: String,
      default: 'Armas de Fuego'
    },
    hover: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: true
    },
    bordered: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      items: [],
      fields: [
        {key: 'imagen'},
        {key: 'exp'},
        {key: 'tipo'},
        {key: 'color'},
        {key: 'fecha'},
        {key: 'acción'}
      ],
      currentPage: 1,
      perPage: 15,
      totalRows: 0,
      urlImage: settings.API_IMAGE,
      query: ''
    }
  },
  computed: {
  },
  mounted() {
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
    this.getArms()
  },
  methods: {
    getRowCount (items) {
      return items.length
    },
    getArms() {
      Event.$emit('loading')
      axios.get(`${settings.API_URL}/arms?limit=1`)
      .then(resp => {
        axios.get(`${settings.API_URL}/arms?limit=${resp.data.total}`)
        .then(resp => {
          this.items = resp.data.data.filter(data => data.Evidencium.estado == 'COMPLETADO')
          Event.$emit('stopLoading')
        })
        .catch(error => {
          console.dir(error)
          Event.$emit('stopLoading')
        })
      })
    },
    goToUpdate(id) {
      this.$router.push({ name: 'editArm', params: { id }})
    },
    goToDetail(id) {
      this.$router.push({ name: 'detailArm', params: { id }})
    },
    generateReport(id) {
      Event.$emit('loading')
      let data = this.items.filter(data => data.id == id )[0]

      let image = settings.API_IMAGE + '/' + data.Evidencium.Imagens[0].nombre_archivo 

      Object.assign(data, { image })

      axios.post(`${settings.API_REPORT}/arms`, { data })
      .then(resp => {
        window.open(settings.RENDER_REPORT + '/' + resp.data, "_blank")
        Event.$emit('stopLoading')
      })
      .catch(error => {
        console.dir(error)
        Event.$emit('stopLoading')
      })
    },
    isEnabled(date) {
      const isEn = moment(date).add(1, 'day').unix() < moment().unix()
      return  isEn  === true ? false : true 
    },
    search() {
      if(this.query.length > 2) {
          Event.$emit('loading')
          axios.post(`${settings.API_URL}/search/arms`, { quering: this.query })
          .then(resp => {
            this.items = resp.data.data
             Event.$emit('stopLoading')
          })
          .catch(error => {
            console.dir(error)
             Event.$emit('stopLoading')
          })
      } else {
        this.getArms()
      }
    }

  }
}
</script>

<style scoped>
.card-body >>> table > tbody > tr > td {
  cursor: pointer;
}
</style>

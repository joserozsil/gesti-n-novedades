<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <!-- datos generales -->
        <b-card>
          <div slot="header">
            <strong>Detalles de Cronología</strong>
          </div>
          <!-- primer encabezado -->
          <b-row>
            <b-col sm="6">
              <b-form-group
                :description="`CC-`+port.clise"
                label="Clise"
                laber-for="clise"
                :horizontal="false">
                <b-form-input :formatter="validateClise" :disabled="receptionData.estado === 'COMPLETADO'" v-model="port.clise" type="number" id="clise"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                :description="`K-18-0071-`+port.exp"
                label="Exp"
                laber-for="exp"
                :horizontal="false">
                <b-form-input :formatter="validateExp" :disabled="receptionData.estado === 'COMPLETADO'" v-model="port.exp" type="number" id="exp"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <!--/ primer encabezado -->
          <!-- segundo encabezado -->
          <b-row>
            <b-col sm="6">
              <b-form-group
                description="Ej: Camisa"
                label="Tipo"
                laber-for="tipo"
                :horizontal="false">
                <b-form-input :formatter="onlyKey" v-model="port.tipo" type="text" id="tipo"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: Algodón"
                label="Textura"
                laber-for="textura"
                :horizontal="false">
                <b-form-input :formatter="onlyKey" v-model="port.textura" type="text" id="textura"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: Negro"
                label="Color"
                laber-for="color"
                :horizontal="false">
                <b-form-input :formatter="onlyKey" v-model="port.color" type="text" id="color"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: SS"
                label="Talla:"
                laber-for="talla"
                :horizontal="false">
                <b-form-input v-model="port.talla" type="text" id="talla"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: Adidas"
                label="Marca"
                laber-for="marca"
                :horizontal="false">
                <b-form-input v-model="port.marca" type="text" id="marca"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: Empresa X C,A."
                label="Fabricante"
                laber-for="fabricante"
                :horizontal="false">
                <b-form-input v-model="port.fabricante" type="text" id="fabricante"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                description="Ej: 1 kg"
                label="Peso"
                laber-for="peso"
                :horizontal="false">
                <b-form-input v-model="port.peso" type="text" id="peso"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
  					<b-col sm="12">
  						<b-form-group
                label="Comentario"
                laber-for="comentarios"
                :horizontal="false">
                <b-form-textarea v-model="port.comentarios" rows="5" class="form-control">
                </b-form-textarea>
              </b-form-group>
  					</b-col>
          </b-row>
        </b-card>
        <!--/ datos generales -->

        <!-- datos de imagenes -->
        <b-card>
          <div slot="header">
            <strong>Imágenes</strong>
          </div>
          <b-row>
            <b-col sm="12">
              <div class="wrapper">
                <gallery :images="images" :index="index" @close="index = null"></gallery>
                <div
                  class="image"
                  v-for="(image, imageIndex) in images"
                  :key="imageIndex"
                  :class="['image', index == imageIndex ? 'selected' : '']"
                  @click="index = imageIndex"
                  :style="{ backgroundImage: 'url(' + image + ')', width: '100%', height: '300px' }"
                ></div>
              </div>
              <vue-dropzone
                v-on:vdropzone-success="reloadImages"
                v-on:vdropzone-sending="sendingEvent"
                ref="myVueDropzone" 
                id="dropzone" 
                :options="dropzoneOptions">
              </vue-dropzone>
            </b-col>
          </b-row>
        </b-card>
        <!--/ datos de imagenes -->

        <!-- datos de cronologia -->
        <b-card>
          <div slot="header">
            <strong>Datos de Recepción</strong>
          </div>
          <b-row v-if="!loading">
            <b-col sm="6">
              <b-form-group
                label="Tipo"
                laber-for="tipo_recepcion"
                :disabled="true"
                :horizontal="false">
                <b-form-input disabled :value="receptionData.tipo_recepcion" type="text" id="clise" class="form-control"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group
                label="Funcionario"
                :disabled="true"
                :horizontal="false">
                <b-form-input disabled
                  :value="receptionData.Usuario.nombre + ' ' + receptionData.Usuario.apellido" type="text"class="form-control">
                </b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="12">
              <b-form-group
                label="Descripción"
                laber-for="Descripción"
                :disabled="true"
                :horizontal="false">
                <b-form-textarea disabled :value="receptionData.descripcion" rows="5" class="form-control">
                </b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
        <!--/ datos de cronología -->

        <!-- acciones -->
        <div class="form-actions padding">
          <b-button 
            v-if="isNew" 
            @click="storeClothes()" 
            class="mr" 
            type="submit" 
            variant="primary">
            Crear
          </b-button>
          <b-button 
            v-if="!isNew" 
            @click="updateClothes()" 
            class="mr" 
            type="submit" 
            variant="primary">
            Actualizar
          </b-button>
          <b-button  @click="$router.go(-1)" class="mr" type="button" variant="secondary">
            Cancelar
          </b-button>
          <b-button v-if="receptionData.estado === 'EN_PROCESO'" :disabled="receptionData === 'COMPLETADO'"  @click="onChangeStatus()" class="mr" type="button" variant="primary">
            Marcar Como Procesada
          </b-button>
          Estado: {{ receptionData.estado }}
        </div>
        <!--/ acciones -->
      </b-col>
    </b-row>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

import VueGallery from 'vue-gallery'

import settings from '../../config'
import swal from 'sweetalert'
import store from '../../store/store'

export default {
  components: {
    vueDropzone: vue2Dropzone,
    'gallery': VueGallery
  },
  data: () => {
    return {
      users: [],
      user: {},
      port: {},
      receptionData: {},
      images: [],
      index: null,
      isNew: false,
      loading: true,
      dropzoneOptions: {
        url: `${settings.API_URL}/pictures`,
        dictDefaultMessage: "CARGAR IMAGEN",
        headers: { 
          "authorization" : localStorage.getItem('token')
         }
      }
    }
  },
  mounted() {
    this.user = this.$store.getters.user
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token')

    this.clothesExist().then(resp => {
      if(this.isEmpty(resp.data.data)) {
        this.isNew = true
      } else {
        this.isNew = false
        const clise = resp.data.data.clise.split('-')[1]
        const exp = resp.data.data.exp.split('-')[3]

        this.port = resp.data.data
        this.port.clise = clise
        this.port.exp = exp

        this.port.Evidencium.Imagens.forEach(element => {
          var url = `${ settings.API_IMAGE}/${element.nombre_archivo}`
          this.images.push(url)
        })
      }
    })

    this.getUsers()
    this.getEvidence()

  },
  methods: {
    clothesExist() {
      return new Promise((resolve, reject) => {
        axios.get(`${settings.API_URL}/evidences/${this.$route.params.id}/clothes`)
        .then(resp => {
          resolve(resp)
        })
      })
    },
    storeClothes() {
      Object.assign(this.port, { evidencia_id: this.$route.params.id})
      Object.assign(this.port, { clise: `CC-${this.port.clise}`})
      Object.assign(this.port, { exp: `K-18-0071-${this.port.exp}`})
      Event.$emit('loading')

      axios.post(`${settings.API_URL}/clothes`, this.port)
      .then(resp => {
        Event.$emit('stopLoading')
        swal({
          title: "Item modificado exitosamente",
          text: ``,
          icon: "success",
        })
        this.$router.push({ name: 'chronologyList' })
      })
      .catch(error => {
        Event.$emit('stopLoading')
        if(error.response.data.name == 'SequelizeDatabaseError') {
          swal({
            title: `Atención`,
            text: `Algo ha salido mal, intentelo nuevamente`,
            icon: "error",
          })
        }

        if(error.response.data.message) {
          swal({
            title: `Atención`,
            text: `${ error.response.data.message }`,
            icon: "error",
          })
        }
        
        error.response.data.errors.forEach(element => {
          swal({
            title: `Atención`,
            text: `${ element.message }`,
            icon: "error",
          })
        })
      })
    },
    updateClothes() {
      Object.assign(this.port, { clise: `CC-${this.port.clise}`})
      Object.assign(this.port, { exp: `K-18-0071-${this.port.exp}`})

      Event.$emit('loading')

      axios.put(`${settings.API_URL}/clothes/${this.port.id}`, this.port)
      .then(resp => {
        Event.$emit('stopLoading')
        swal({
          title: "Retrato modificado exitosamente",
          text: ``,
          icon: "success"
        })
        this.$router.push({ name: 'chronologyList' })
      })
      .catch(error => {
        Event.$emit('stopLoading')
        if(error.response.data.name == 'SequelizeDatabaseError') {
          swal({
            title: `Atención`,
            text: `Algo ha salido mal, intentelo nuevamente`,
            icon: "error",
          })
        }

        if(error.response.data.message) {
          swal({
            title: `Atención`,
            text: `${ error.response.data.message }`,
            icon: "error",
          })
        }
        
        error.response.data.errors.forEach(element => {
          swal({
            title: `Atención`,
            text: `${ element.message }`,
            icon: "error",
          })
        })
      })
    },
    getUsers() {
      axios.get(`${settings.API_URL}/users?limit=1`)
      .then(resp => {
        axios.get(`${settings.API_URL}/users?limit=${resp.total}`)
        .then(resp => {
          this.users = resp.data.data
        })
      })
    },
    getEvidence() {
      this.loading = true
      axios.get(`${settings.API_URL}/evidences/${this.$route.params.id}`)
      .then(resp => {
        this.receptionData = resp.data.data
        this.loading = false
      })
    },
    isEmpty(obj) {
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              return false
      }

      return JSON.stringify(obj) === JSON.stringify({})
    },
    sendingEvent (file, xhr, formData) {
      formData.append('evidencia_id', this.$route.params.id)
      formData.append('usuario_id', this.user.id)
    },
    reloadImages(file, response) {
      this.images.push(`${settings.API_IMAGE}/${response.nombre_archivo}`)
    },
    onChangeStatus() {

      const estado = this.receptionData.estado == 'COMPLETADO' ? 'EN_PROCESO' : 'COMPLETADO'

      // campo clise
      if(!this.port.clise && estado == 'COMPLETADO') {
        this.receptionData.estado = 'EN_PROCESO'
        this.showError('clise')
        return ''
      }

      if ( this.port.clise.length < 5 &&  estado == 'COMPLETADO') {
        swal({
          title: `Atención`,
          text: `El campo clise debe contener 5 digitos`,
          icon: "error",
        })
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      if ( this.port.clise.length > 5 && estado == 'COMPLETADO') {
        swal({
          title: `Atención`,
          text: `El campo clise debe contener 5 digitos`,
          icon: "error",
        })
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }
      //-- campo clise
      // campo exp
      if(!this.port.exp && estado == 'COMPLETADO') {
        this.showError('exp')
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      if ( this.port.exp.length < 6 &&  estado == 'COMPLETADO') {
        swal({
          title: `Atención`,
          text: `El campo exp debe contener 6 digitos`,
          icon: "error",
        })
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      if ( this.port.exp.length > 6 && estado == 'COMPLETADO') {
        swal({
          title: `Atención`,
          text: `El campo exp debe contener 6 digitos`,
          icon: "error",
        })
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }
      //-- campo exp

      if(!this.port.tipo && estado == 'COMPLETADO') {
        this.showError('Tipo')
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      if(!this.images.length && estado == 'COMPLETADO') {
        this.showError('Imagenes')
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      if(!this.port.color && estado == 'COMPLETADO') {
        this.showError('color')
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      if(!this.port.marca && estado == 'COMPLETADO') {
        this.showError('marca')
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      if(!this.port.talla && estado == 'COMPLETADO') {
        this.showError('talla')
        this.receptionData.estado = 'EN_PROCESO'
        return ''
      }

      this.receptionData.estado = 'COMPLETADO'

      Event.$emit('loading')
      axios.put(`${settings.API_URL}/evidences/${this.receptionData.id}`, {
        estado
      }).then(resp => {
        console.log(`Estado actualizado a ${estado}`)
        Event.$emit('stopLoading')
      }).catch(error => {
        console.dir(error)
        Event.$emit('stopLoading')
      })

      if(this.isNew === true) {
        // registrar
        this.storeClothes()
      } else {
        // actualizar
        this.updateClothes()
      }

    },
    showError(field) {
      swal({
        title: `Atención`,
        text: `El campo ${field} es requerido`,
        icon: "error",
      })
    },
    onlyKey(value, event) {
      if (value.match(/^[a-zA-Z\s]*$/) != null) {
        return value
      } else {
        return value.substr(0, value.length - 1)
      }
    },
    validateClise(value, event) {
      if (value.length <= 5 ) {
        return value
      } else {
        return value.substr(0, value.length - 1)
        ret
      }
    },
    validateExp(value, event) {
      if (value.length <= 6 ) {
        return value
      } else {
        return value.substr(0, value.length - 1)
        ret
      }
    }
  }
}

</script>

<style scoped>
  .padding {
    padding: 2em 0;
  }

  .mr {
    margin-right: 1em;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    grid-auto-rows: minmax(200px, auto);
    margin-bottom: 1em;
  }
  .image {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
  }
</style>  
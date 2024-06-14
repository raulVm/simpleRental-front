<template>
    <div>
      <index-navbar />
      <Portada :img="RivieraMaya" :textoBanner="textoBanner"/>
        <section class="relative py-16 bg-blueGray-200" data-app="true">
            <div class="container mx-auto px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                    <BarraRedes/>
                    <div class="px-12">
                        <div class="flex flex-wrap text-center justify-center">
                            <div class="w-full lg:w-3/12 px-4 mt-4 lg:order-3 lg:text-center lg:self-center">
                                <v-hover class="text-center mt-4">
                                    <template v-slot:default="{ hover }">
                                        <v-card
                                            class="mx-auto"
                                            max-width="344"
                                        >
                                            <v-img height="200px" :src="Viaje"></v-img>
                                            <v-card-title>
                                            <v-rating
                                                :value="5"
                                                dense
                                                :color="orange"
                                                background-color="orange"
                                                hover
                                                class="mr-2"
                                            ></v-rating>
                                            <span class="primary--text text-subtitle-2">Viaja como te gusta</span>
                                            </v-card-title>

                                            <v-fade-transition>
                                            <v-overlay
                                                v-if="hover"
                                                absolute
                                                color="#014d44"
                                            >
                                                <v-btn name="reservacion" id="reservacion" @click="dialog = true" :color="orange">RESERVACIÓN</v-btn>
                                            </v-overlay>
                                            </v-fade-transition>
                                        </v-card>
                                    </template>
                                </v-hover>
                            </div>
                            <div class="w-full lg:w-3/12 px-4mt-4 lg:order-3 lg:text-center lg:self-center">
                                <v-hover class="text-center mt-4">
                                    <template v-slot:default="{ hover }">
                                        <v-card
                                            class="mx-auto"
                                            max-width="344"
                                        >
                                            <v-img height="200px" :src="Alojamiento"></v-img>

                                            <v-card-title class="text-center">
                                            <v-rating
                                                :value="5"
                                                dense
                                                :color="orange"
                                                background-color="orange"
                                                hover
                                                class="mr-2"
                                            ></v-rating>
                                            <span class="primary--text text-subtitle-2">Alojamientos <br> acogedores</span>
                                            </v-card-title>

                                            <v-fade-transition>
                                            <v-overlay
                                                v-if="hover"
                                                absolute
                                                color="#014d44"
                                            >
                                                <v-btn name="alojamiento" id="alojamiento" @click="dialog2 = true" :color="orange">VER ALOJAMIENTO</v-btn>
                                            </v-overlay>
                                            </v-fade-transition>
                                        </v-card>
                                    </template>
                                </v-hover>
                            </div>
                            <div class="w-full lg:w-3/12 px-4 mt-4 lg:order-3 lg:text-center lg:self-center">
                                <v-hover class="text-center mt-4">
                                    <template v-slot:default="{ hover }">
                                        <v-card
                                            class="mx-auto"
                                            max-width="344"
                                        >
                                            <v-img height="200px" :src="AtractivoTuristico"></v-img>

                                            <v-card-title>
                                            <v-rating
                                                :value="5"
                                                dense
                                                :color="orange"
                                                background-color="orange"
                                                hover
                                                class="mr-2"
                                            ></v-rating>
                                            <span class="primary--text text-subtitle-2">Atractivos turísticos</span>
                                            </v-card-title>

                                            <v-fade-transition>
                                            <v-overlay
                                                v-if="hover"
                                                absolute
                                                color="#014d44"
                                            >
                                                <v-btn name="detinosTuristicos" id="detinosTuristicos" @click="dialog3 = true" :color="orange">VER DESTINOS TURÍSTICOS</v-btn>
                                            </v-overlay>
                                            </v-fade-transition>
                                        </v-card>
                                    </template>
                                </v-hover>
                            </div>
                            <div class="w-full lg:w-6/12 px-4 mt-4 lg:order-3 lg:text-center lg:self-center">
                                <v-card-title class="text-h5">
                                    Paradisíacas playas de arena blanca, majestuosos cenotes subterráneos, yacimientos arqueológicos Mayas, paisajes marinos inolvidables, islas de ensueño, parques acuáticos y temáticos de reconocimiento internacional.
                                </v-card-title>
                                <v-card-title class="text-h5">
                                    La Riviera Maya es uno de los destinos mas codiciados a nivel mundial, donde te esperan cómodos resort de lujo, actividades ecoturísticas, cruceros por el caribe e indiscutiblemente especialidades culinarias para deleitar tu paladar.
                                </v-card-title>
                                <v-card-title class="text-h5">
                                    El Caribe Mexicano ha alcanzado una imagen turística difícil de igualar, eventos de talla internacional invita a todos los continentes a participar y conocer este gran destino, en simplerental.mx reserva alojamientos, vehículos y atractivos turísticos de forma segura y eficaz. Chatea online con un ejecutivo.
                                </v-card-title>
                            </div>
                            <div class="w-full lg:w-6/12 px-4 mt-4 lg:order-3 lg:text-center lg:self-center">
                                <v-img
                                    :src="PiramideMaya"
                                    aspect-ratio="1.4"
                                    contain
                                ></v-img>
                            </div>
                            <div class="w-full lg:12 px-4 mt-4 lg:order-3 lg:text-center lg:self-center">
                                <v-card-title class=" text-h5 text-center">
                                    <strong>¡Recuerda que todo lo puedes reservar desde este sitio!</strong>
                                </v-card-title>
                            </div>
                            <div class="w-full lg:w-6/12 px-4 mt-4 lg:order-3 lg:text-center lg:self-center">
                                <iframe :src="urlUbicacion" width="500" height="400" style="border:2;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                           
                            </div>
                            <div class="w-full lg:w-6/12 px-4 mt-4 lg:order-3 lg:text-center lg:self-center">
                                <v-radio-group v-model="radios" >
                                    <template v-slot:label>
                                            <div><strong>Ubica los destinos más relevantes</strong></div>
                                    </template>
                                    <template v-for="(destino) in destinos" >
                                        <v-radio :value="destino.id" @click="urlUbicacion = destino.ubicacion" :key="destino.id">
                                            <template v-slot:label>
                                                <div><strong class="success--text">{{destino.nombre}}</strong></div>
                                            </template>
                                        </v-radio>
                                    </template>
                                </v-radio-group>
                            </div>
                            <div class="w-full lg:w-12/12 px-4 mt-4 lg:order-3 lg:text-center lg:self-center">
                               <Carrusel />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <v-dialog
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
                scrollable
                v-model="dialog"
            >
                <DisponibilidadQuintanaRooDialog @setDialog="setDialog"   :dialog="dialog" />
            </v-dialog>
            <v-dialog
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
                scrollable
                v-model="dialog2"
            >
                <DisponibilidadAlojamiento @setDialog2="setDialog2"   :dialog="dialog2" />
            </v-dialog>
            <v-dialog
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
                scrollable
                v-model="dialog3"
            >
                <DisponibilidadAtractivoTuristico @setDialog3="setDialog3"   :dialog="dialog3" />
            </v-dialog>

        </section>
      <footer-component />
  </div>
</template>

<script>
    import colors from 'vuetify/lib/util/colors'
    import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
    import FooterComponent from "@/components/Footers/Footer.vue";
    import Portada from "@/views/Portada.vue";
    import BarraRedes from "@/views/BarraRedes.vue";
    import RivieraMaya from  "@/assets/imagenes/cancun-riviera-maya.jpg";
    import Viaje from  "@/assets/imagenes/Viaje.jpeg";
    import Alojamiento from  "@/assets/imagenes/Alojamiento.jpg";
    import AtractivoTuristico from  "@/assets/imagenes/AtractivoTuristico.png";
    import PiramideMaya from  "@/assets/imagenes/PiramideMaya.jpg";
    import DisponibilidadQuintanaRooDialog from "@/components/Dialog/DisponibilidadQuintanaRoo.vue";
    import DisponibilidadAlojamiento from "@/components/Dialog/DisponibilidadAlojamiento.vue";
    import DisponibilidadAtractivoTuristico from "@/components/Dialog/DisponibilidadAtractivoTuristico.vue";
    import Carrusel from "@/components/Carrusel/CarruselRivieraMaya.vue"
    // import GoogleMap from '@/components/Maps/GoogleMap.vue'
    export default {
        data() {
            return {
                RivieraMaya:RivieraMaya,
                textoBanner: 'Vacaciones en la Riviera Maya',
                overlay: false,
                Viaje,
                Alojamiento,
                AtractivoTuristico,
                PiramideMaya,
                orange:colors.orange.darken3,
                dialog: false,
                dialog2: false,
                dialog3: false,
                province: "[none]",
                // map: null,
                radios: 'Duckduckgo',
                destinos:[
                    {id:1,nombre:'Aeropuerto internacional Cancún', ubicacion:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119096.83697756998!2d-86.9194452!3d21.1214886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e81bb49b57809%3A0xe7f7d44da1f07a06!2sAeropuerto%20Internacional%20de%20Canc%C3%BAn!5e0!3m2!1ses!2smx!4v1714658190424!5m2!1ses!2smx'},
                    {id:2,nombre:'Cancún',ubicacion:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119096.83697756998!2d-86.9194452!3d21.1214886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b05aef653db%3A0xce32b73c625fcd8a!2zQ2FuY8O6biwgUS5SLg!5e0!3m2!1ses!2smx!4v1714658428990!5m2!1ses!2smx'},
                    {id:3,nombre:'Isla Mujeres',ubicacion:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59503.343236480396!2d-86.7320036!3d21.23347625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c25570eceb2d3%3A0x5870eb25a25e8c7b!2sIsla%20Mujeres%2C%20Q.R.!5e0!3m2!1ses!2smx!4v1714659550932!5m2!1ses!2smx'},
                    {id:4,nombre:'Isla Contoy',ubicacion:'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d118902.81293375735!2d-86.8192744!3d21.3618166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c49b6faedfcdf%3A0x5bfcfa94591c67d9!2sParque%20Nacional%20Isla%20Contoy!5e0!3m2!1ses!2smx!4v1714659591193!5m2!1ses!2smx'},
                    {id:5,nombre:'Holbox',ubicacion:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14846.510643339916!2d-87.379604!3d21.5222995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4d9275a57191a5%3A0x27f852e722aa141!2s77310%20Holbox%2C%20Q.R.!5e0!3m2!1ses!2smx!4v1714659629593!5m2!1ses!2smx'},
                    {id:6,nombre:'Puerto Morelos',ubicacion:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59653.31923446207!2d-86.89152354999999!3d20.85864615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e883a1aceaa83%3A0x16b912813b891e6e!2sPuerto%20Morelos%2C%20Q.R.!5e0!3m2!1ses!2smx!4v1714659659513!5m2!1ses!2smx'},
                    {id:7,nombre:'Playa del Carmen',ubicacion:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59733.107679677596!2d-87.08007125!3d20.656587599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e4323d22d4e61%3A0xe8c10b783bab4adc!2sPlaya%20del%20Carmen%2C%20Q.R.!5e0!3m2!1ses!2smx!4v1714659710398!5m2!1ses!2smx'},
                    {id:8,nombre:'Cozumel',ubicacion:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59789.720301575515!2d-86.94226964999999!3d20.512066299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e58330a673659%3A0x9cedf516c7d86e9a!2sCozumel%2C%20Q.R.!5e0!3m2!1ses!2smx!4v1714659742377!5m2!1ses!2smx'},
                    {id:9,nombre:'Akumal',ubicacion:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59789.720301575515!2d-86.94226964999999!3d20.512066299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e58330a673659%3A0x9cedf516c7d86e9a!2sCozumel%2C%20Q.R.!5e0!3m2!1ses!2smx!4v1714659782156!5m2!1ses!2smx'},
                    {id:10,nombre:'Tulum',ubicacion:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59919.62384217263!2d-87.46406145!3d20.176704349999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4fd40310e42a4b%3A0xeedc0db93ff9ab7!2sTulum%2C%20Q.R.!5e0!3m2!1ses!2smx!4v1714659819478!5m2!1ses!2smx'},
                    {id:11,nombre:'sian ka´an',ubicacion:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d963605.0321116268!2d-89.4128422!3d19.365595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5009169714b245%3A0x41d8f170a50e52e!2sReserva%20de%20la%20Bi%C3%B3sfera%20Sian%20Ka&#39;an!5e0!3m2!1ses!2smx!4v1714687413454!5m2!1ses!2smx"},
                    {id:12,nombre:'Mahahual',ubicacion:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30229.899228654423!2d-87.7049307!3d18.720571149999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5adf4e2063d693%3A0xc5a84ac96f30685a!2s77976%20Mahahual%2C%20Q.R.!5e0!3m2!1ses!2smx!4v1714659894794!5m2!1ses!2smx'},
                    {id:13,nombre:'Bacalar',ubicacion:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30238.754180747896!2d-88.399339!3d18.67098285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5bb13e302c19f9%3A0x11cedc7f2bd0e608!2sBacalar%2C%20Q.R.!5e0!3m2!1ses!2smx!4v1714659928562!5m2!1ses!2smx'},
                ],
                urlUbicacion: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846638.3547841506!2d-92.76377458989501!3d19.692060221546207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4ffcf0eac32695%3A0xc4f0c52a484c8d9c!2sQuintana%20Roo!5e0!3m2!1ses!2smx!4v1714238915936!5m2!1ses!2smx',
            }
        },
        components: {
            IndexNavbar,
            FooterComponent,
            Portada,
            BarraRedes,
            DisponibilidadQuintanaRooDialog,
            DisponibilidadAlojamiento,
            DisponibilidadAtractivoTuristico,
            Carrusel,
        },
        mounted() {
            // this.map = new window.google.maps.Map(this.$refs["map"], {
            //     center: {lat:-25.344, lng:131.036},
            //     zoom: 4
            // })
            // new window.google.maps.Marker({
            //     position: {lat:-25.344, lng:131.036},
            //     map: this.map
            // })
        },
        methods:{
            setDialog(data){
                this.dialog = data;
            },
            setDialog2(data){
                this.dialog2 = data;
            },
            setDialog3(data){
                this.dialog3 = data;
            },
            onMapClick(e) {      
                this.province = e.title;
            },
            // getMap(callback){
            //     let vm = this;
            //     function checkForMap() {
            //         if (vm.map) callback(vm.map)
            //         else setTimeout(checkForMap, 200)
            //     }
            //     checkForMap();
            // }
		}
    }
</script>
<style>
 #map{
    height: 600px;
    background: gray;
 }
</style>
<template>
	<div>

		<v-card tile>
			<v-toolbar
			flat
			dark
			color="#014d44"
			>
				<v-btn
				icon
				dark
					@click="updateDialog(false)"
				>
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<v-toolbar-title>VER DISPONIBILIDAD DE ALOJAMIENTO</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-toolbar-items>
					<v-btn
						dark
						text
					>
						Enviar
					</v-btn>
				</v-toolbar-items>
				<v-menu
					bottom
					right
					offset-y
				>
					<template v-slot:activator="{ on, attrs }">
						<v-btn
						dark
						icon
						v-bind="attrs"
						v-on="on"
						>
						<v-icon>mdi-dots-vertical</v-icon>
						</v-btn>
					</template>
					<v-list>
					<v-list-item
						v-for="(item, i) in items"
						:key="i"
						@click="() => {}"
					>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item>
					</v-list>
				</v-menu>
			</v-toolbar>
		</v-card>
		<v-card>
			<div style="flex: 1 1 auto;">
				<br>
				<h3><b>Datos del alojamiento</b></h3>
				<v-form @submit.prevent="submit">
					<v-container fluid>
						<v-row>
							<v-col
								cols="12"
								sm="4"
								md="4"
								class="d-flex"
							>
								<v-select
								v-model="form.alojamiento"
								:items="CatAlojamiento"
								label="¿Donde deseas alojarte? *"
								required
								chips
								dense
								></v-select>
							</v-col>
							<v-col
								cols="12"
								sm="4"
								md="4"
							>
								<v-select
								v-model="form.inmueblePreferido"
								:items="CatInmueblePreferido"
								label="¿Que tipo de inmueble prefieres? *"
								required
								></v-select>
							</v-col>					
						
							<v-col
							cols="12"
							sm="6"
							md="4"
							>
								<v-menu
									v-model="menuDateS"
									:close-on-content-click="false"
									:nudge-right="40"
									lazy
									transition="scale-transition"
									offset-y
									min-width="auto"
								>
									<template v-slot:activator="{ on, attrs }">
									<v-text-field
										v-model="form.fechaEntrada"
										label="Fecha de entrada *"
										prepend-icon="mdi-calendar"
										readonly
										v-bind="attrs"
										v-on="on"
									></v-text-field>
									</template>
									<v-date-picker
									v-model="form.fechaEntrada"
									@input="menuDateS = false"
									></v-date-picker>
								</v-menu>
							</v-col>
							<v-col
							cols="12"
							sm="6"
							md="4"
							>
								<v-menu
									v-model="menuDateR"
									:close-on-content-click="false"
									:nudge-right="40"
									lazy
									transition="scale-transition"
									offset-y
									min-width="auto"
								>
									<template v-slot:activator="{ on, attrs }">
									<v-text-field
										v-model="form.fechaSalida"
										label="Fecha de salida *"
										prepend-icon="mdi-calendar"
										readonly
										v-bind="attrs"
										v-on="on"
									></v-text-field>
									</template>
									<v-date-picker
									v-model="form.fechaSalida"
									@input="menuDateR = false"
									></v-date-picker>
								</v-menu>
							</v-col>
							<v-col
								cols="12"
								sm="4"
								md="4"
							>
								<v-text-field
								v-model="form.children"
								label="Cuantos niños *"
								required
								></v-text-field>
							</v-col>
							<v-col
								cols="12"
								sm="4"
								md="4"
							>
								<v-text-field
								v-model="form.adulto"
								label="Cuantos adultos *"
								required
								></v-text-field>
							</v-col>
							<v-col
							cols="12"
							md="4"
							sm="6"
							class="d-flex"
							>
								<v-select
									:items="catMascotas"
									v-model="form.mascotas"
									label="Mascotas *"
									required
									@click="ValMascotas()"
								></v-select>
							</v-col>
							<v-col
								cols="12"
								sm="4"
								md="4"
								v-if="mascotasVal === true"
							>
								<v-text-field
								v-model="form.numMascota"
								label="Cuantas mascotas *"
								required
								></v-text-field>
							</v-col>
							<v-col
								cols="12"
								sm="4"
								md="4"
							>
								<v-text-field
								v-model="form.habitaciones"
								label="Cuantas habitaciones *"
								required
								></v-text-field>
							</v-col>													
							<v-col
							cols="12"
							md="12"
							sm="12"
							>
								<h3><b>Datos personales</b></h3>
							</v-col>
							<v-col
							cols="12"
							md="4"
							>
								<v-text-field
									v-model="form.nombre"
									label="Nombre *"
									required
								></v-text-field>
							</v-col>
							<v-col
							cols="12"
							md="4"
							>
								<v-text-field
									v-model="form.primerA"
									label="Primer apellido *"
									required
								></v-text-field>
							</v-col>
							<v-col
							cols="12"
							md="4"
							>
								<v-text-field
									v-model="form.segundoA"
									label="Segundo apellido"
								></v-text-field>
							</v-col>
							<v-col
							cols="12"
							md="4"
							>
								<v-text-field
									v-model="form.telefono"
									label="Télefono"
								></v-text-field>
							</v-col>
							<v-col
							cols="12"
							md="4"
							>
								<v-text-field
									v-model="form.correoE"
									label="Correo electrónico *"
									required
								></v-text-field>
							</v-col>
							<v-col
							cols="12"
							md="12"
							sm="12"
							>
								<h3><b>Carga de documentos</b></h3>
							</v-col>
							<v-col
							cols="12"
							md="4"
							>
								<v-file-input
								label="Identificación oficial"
								filled
								v-model="form.identificacion"
								prepend-icon="mdi-camera"
								></v-file-input>
							</v-col>
							<v-col
							cols="12"
							md="4"
							>
								<v-file-input
								label="Comprobante de domicilio vigente"
								filled
								v-model="form.comprobanteDomV"
								prepend-icon="mdi-camera"
								></v-file-input>
							</v-col>
						</v-row>
					</v-container>
				</v-form>
			</div>
		</v-card>
	</div>
</template>
<script>
	export default {	
		props: {
			dialog: {
				type: Boolean,
			},
		},
		data() {
			return {
				form:{
					alojamiento:'',
					inmueblePreferido:'',
					entrega:'',
					fechaEntrada: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
					fechaSalida: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
					children:'',
					adulto: '',
					mascotas: '',
					numMascotas: '',
					habitaciones: '',
					nombre: '',
					primerA: '',
					segundoA: '',
					telefono: '',
					correoE: '',
					identificacion: null,
					comprobanteDomV: null,
				},
				menuDateS: false,
				menuDateR: false,
				mascotasVal: false,
				items: [
					{
						title: 'Click Me',
					},
					{
						title: 'Click Me',
					},
					{
						title: 'Click Me',
					},
					{
						title: 'Click Me 2',
					},
				],
				CatAlojamiento: ['Visitante y turista', 'Cliente locales', 'Empresas'],
				CatInmueblePreferido: ['Visitante y turista', 'Cliente locales', 'Empresas'],
				CatEntrega: ['Aeropuerto Cancún', 'Alojamiento Vacacional', 'Hotel o Resort', 'Domicilio Particular', 'ADO u otro'],
				catMascotas: ['Si', 'No'],
			}
		},
		methods: {
			updateDialog(data){
					this.$emit('setDialog2', data);
				},
			submit () {
				// this.$refs.observer.validate()
			},
			ValMascotas(){
				if(this.form.numMascotas == 'Si'){
					this.mascotasVal = true;
				}else{
					this.mascotasVal = false;
				}
			}
		}
  }
</script>
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
				<v-toolbar-title>VER DISPONIBILIDAD EN QUINTANA ROO</v-toolbar-title>
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
				<h3><b>Información para reservar</b></h3>
				<v-form @submit.prevent="submit">
					<v-container fluid>
						<v-row>
							<v-col
								class="d-flex"
								cols="12"
								sm="4"
								md="4"
							>
								<v-select
								v-model="form.Solicitante"
								:items="CatSolicitante"
								label="Solicitante *"
								required
								></v-select>
							</v-col>
							<v-col
								cols="12"
								sm="4"
								md="4"
							>
								<v-select
								v-model="form.entrega"
								:items="CatEntrega"
								label="Entrega *"
								required
								></v-select>
							</v-col>
							<v-col
								cols="12"
								sm="4"
								md="4"
							>
								<v-select
								v-model="form.devolucion"
								:items="CatDevolucion"
								label="Devolución *"
								required
								></v-select>
							</v-col>
							<v-col
							cols="12"
							md="4"
							>
								<v-text-field
									v-model="form.domParticular"
									label="Domicilio particular o de estancia *"
									required
								></v-text-field>
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
										v-model="form.fechaRegreso"
										label="Fecha de regreso *"
										prepend-icon="mdi-calendar"
										readonly
										v-bind="attrs"
										v-on="on"
									></v-text-field>
									</template>
									<v-date-picker
									v-model="form.fechaRegreso"
									@input="menuDateR = false"
									></v-date-picker>
								</v-menu>
							</v-col>
							<v-col
								cols="12"
								sm="6"
								md="2"
							>
								<v-menu
								ref="menu"
								v-model="menuHS"
								:close-on-content-click="false"
								:nudge-right="40"
								:return-value.sync="horaSalida"
								transition="scale-transition"
								offset-y
								max-width="290px"
								min-width="290px"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-text-field
										v-model="horaSalida"
										label="Hoda de salida"
										prepend-icon="mdi-clock-time-four-outline"
										readonly
										v-bind="attrs"
										v-on="on"
										></v-text-field>
									</template>
									<v-time-picker
										v-if="menuHS"
										v-model="horaSalida"
										full-width
										@click:minute="$refs.menu.save(horaSalida)"
									></v-time-picker>
								</v-menu>
							</v-col>
							<v-col
								cols="12"
								sm="6"
								md="2"
							>
								<v-menu
								ref="menu"
								v-model="menuHR"
								:close-on-content-click="false"
								:nudge-right="40"
								:return-value.sync="horaRegreso"
								transition="scale-transition"
								offset-y
								max-width="290px"
								min-width="290px"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-text-field
										v-model="horaRegreso"
										label="Hoda de regreso"
										prepend-icon="mdi-clock-time-four-outline"
										readonly
										v-bind="attrs"
										v-on="on"
										></v-text-field>
									</template>
									<v-time-picker
										v-if="menuHR"
										v-model="horaRegreso"
										full-width
										@click:minute="$refs.menu.save(horaRegreso)"
									></v-time-picker>
								</v-menu>
							</v-col>
							<v-col
							cols="12"
							md="4"
							>
								<v-text-field
									v-model="form.numPasajero"
									label="Número de pasajeros *"
									required
								></v-text-field>
							</v-col>
							<v-col
							cols="12"
							md="4"
							sm="6"
							>
							<v-select
								:items="catVehiculos"
								v-model="form.vehiculo"
								label="Elige el vehículo"
								required
							></v-select>
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
					solicitante:'',
					entrega:'',
					devolucion: '',
					domParticular: '',
					fechaSalida: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
					fechaRegreso: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
					horaSalida: null,
					horaRegreso: null,
					numPasajero: '',
					vehiculo: '',
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
				menuHS: false,
				menuHR: false,
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
				CatSolicitante: ['Visitante y turista', 'Cliente locales', 'Empresas'],
				CatEntrega: ['Aeropuerto Cancún', 'Alojamiento Vacacional', 'Hotel o Resort', 'Domicilio Particular', 'ADO u otro'],
				CatDevolucion: ['Aeropuerto Cancún', 'Alojamiento Vacacional', 'Hotel o Resort', 'Domicilio Particular', 'ADO u otro'],
				catVehiculos: ['Visitante y turista', 'Cliente locales', 'Empresas'],
			}
		},
		methods: {
    	updateDialog(data){
				this.$emit('setDialog', data);
		},
		submit () {
			// this.$refs.observer.validate()
		},
		}
  }
</script>
<template>
  <v-card>
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
    	<v-toolbar-title>VER DISPONIBILIDAD DE DESTINO TURÍSTICO</v-toolbar-title>
    	<v-spacer></v-spacer>
      <v-toolbar-items>
				<v-btn
					dark
					text
				>
					Save
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
    <div style="flex: 1 1 auto;"></div>
  </v-card>
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
			}
		},
		methods: {
    	updateDialog(data){
				this.$emit('setDialog3', data);
			}
		}
  }
</script>
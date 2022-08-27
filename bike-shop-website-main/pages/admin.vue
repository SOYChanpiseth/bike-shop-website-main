<template>
  <div>
    <div>
      <h1>Admin Panel</h1>
    </div>
    <table data-toggle="table" class="table">
      <thead>
        <tr>
          <th>Item ID</th>
          <th>Item Name</th>
          <th>Item Price</th>
        </tr>
      </thead>
      <!-- <tbody v-for="item in bikes" :key="item.bikeId">
        <tr>
          <td>{{ item.bikeName }}</td>
          <td>{{ item.color }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody> -->
    </table>
    <!-- <div v-for="item in items" :key="item.id">
      <nuxt-link :to="`/bike/${item.id}`"> test </nuxt-link>
    </div> -->
  </div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
  data() {
    return {
      items: [
        {
          bikeName: "hello",
          id: 123,
          price: 44545,
        },
        {
          bikeName: "hello",
          id: 122,
          price: 44545,
        },
        {
          bikeName: "hello",
          id: 133,
          price: 44545,
        },
        {
          bikeName: "hello",
          id: 1773,
          price: 44545,
        },
        {
          bikeName: "hello",
          id: 1993,
          price: 44545,
        },
      ],
    };
  },
  async asyncData({ store }) {
    try {
      await store.dispatch("bike/getAllBike");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      const errorMessage = error.message;
      throw new Error(errorMessage);
    }
  },
  //   async asyncData({ store }) {
  //     try {
  //       await store.dispatch('bike/getAllBike')
  //     } catch (error) {
  //       // eslint-disable-next-line no-console
  //       console.log(error)
  //       const errorMessage = error.message
  //       throw new Error(errorMessage)
  //     }
  //   },
  // mounted() {
  //   this.$store.dispatch('bike/getAllBike')
  // },
  // computed: {
  //   ...mapGetters({
  //     bikes: "bike/getAllBike",
  //   })
  // },
  // created(){
  //   console.log(this.bikes);
  // }
};
</script>
<style>
.table {
  border: 1px solid black;
}
</style>

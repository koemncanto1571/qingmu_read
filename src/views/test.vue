<template>
  <div class="flipbook-viewport">
    <div class="container">
      <div class="flipbook">
        <div class="sss">
          213123
        </div>
        <div class="sss">
          3213123
        </div>
        <div class="sss">
          345345
        </div>
        <div class="sss">
          123123123
        </div>
        <div class="sss">
          125235
        </div>
        <div class="sss">
          123123
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import turn from '@/utils/turn.js'
export default {
  name: "E-book",
  data() {
    // return{
    //   page1: require('./Home/images/图层31.png'),
    //   page2: require('./Home/images/图层32.png'),
    //   page3: require('./Home/images/图层33.png'),
    //   page4: require('./Home/images/图层31.png'),
    //   page5: require('./Home/images/图层32.png'),
    //   page6: require('./Home/images/图层33.png'),
    //   page7: require('./Home/images/图层32.png'),
    //   page8: require('./Home/images/图层33.png'),
    //   page9: require('./Home/images/图层32.png'),
    //   page10: require('./Home/images/图层34.png'),
    //   page11: require('./Home/images/图层33.png'),
    //   page12: require('./Home/images/图层32.png'),
    // }
  },
  mounted() {
    this.$nextTick(() => {
        // Create the flipbook
        $('.flipbook').turn({
          width:300,
          height:500,
          elevation: 200,
          gradients: true,
          autoCenter: false,
          display:'single'
        });
    });
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.sss{
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  background-color: aqua;
}
</style>

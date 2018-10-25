<template>
    <div class="change-wrap">
        <HeaderChild ref="head"></HeaderChild>
        <form :model="formData">
            <div>旧密码：</div>
            <input type="password" v-model="formData.oldPas">
            <div>新密码：</div>
            <input type="password" v-model="formData.newPas">
            <div>确认密码：</div>
            <input type="password" v-model="formData.confirmPas">
            <mt-button type="danger" size="large" @click='changePas'>确认</mt-button>
        </form>
           
    </div>
</template>

<script>
import HeaderChild from "@/components/headerChild/index";
import {MessageBox} from "mint-ui";
export default {
  name: "changeSecret",
  components: {
    HeaderChild
  },
  data() {
    return {
      text: "修改密码",
      path: "/myParty",
      formData: {},
      message:'两次设置的密码不一致'
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.getHead();
    });
  },
  methods: {
    getHead() {
      this.$refs.head.$refs.title.innerHTML = this.text;
      this.$refs.head.$refs.goback.to = this.path;
    },
    changePas() {
      if (this.formData.newPas != this.formData.confirmPas) {
        MessageBox.alert('两次设置的密码不一致');
      } else {
        this.$axios
          .post(
            `user/updatePwd.do?newPwd=${this.formData.newPas}&oldPwd=${
              this.formData.oldPas
            }`
          )
          .then(res => {
            if (res.code == 0) {
              MessageBox.alert(res.msg);
              
            }else{
              MessageBox.alert(res.msg);
              this.$router.push('/myParty');
            }
          });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.change-wrap {
  padding-top: 0.88rem;
  form {
    padding: 1rem;
  }
  form div {
    font-size: 0.32rem;
  }
  form input {
    width: 5.42rem;
    height: 0.8rem;
    margin: 0.2rem 0;
    border: 0.04rem solid rgb(153, 153, 153);
    border-radius: 0.1rem;
  }
}
</style>
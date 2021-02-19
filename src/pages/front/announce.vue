<template>
  <div >
    <a-spin :spinning="spinning" size="large" />
    <AnnounceDetail :announce="announce" :author="author"></AnnounceDetail>
  </div>

</template>

<script>
import AnnounceDetail from '@/components/index/AnnounceDetail'
export default {
  name: "announce",
  components: {
    AnnounceDetail
  },
  data(){
    return {
      id: 0,
      announce: [],
      author: {},
      spinning: true,

    }
  },
  methods: {
    getAnnounceId(){
      this.id = this.$route.query['id']
    },
    getAnnounceByAid() {
      this.$api.announce.findAnnounceByAid(this.id).then(res => {
          this.announce = res.data;
          this.getAuthorInfo(res.data.uid)
      })
    },
    getAuthorInfo(uid) {
        this.$api.user.findUserById(uid).then(res => {
          this.author = res.data;
        })
    },
    closeSpinning() {
      this.spinning = false;
    }
  },
  mounted() {
    this.getAnnounceId();
    this.getAnnounceByAid();
    this.closeSpinning();
  }
}
</script>

<style scoped>
  .example {
    text-align: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
  }
</style>
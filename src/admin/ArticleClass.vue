<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="8">
        <div style="transform: translateX(40px)">
          <h2>分类</h2>
          <h3>添加新分类</h3>
        </div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="父级分类">
            <el-select v-model="form.father" placeholder="请选择活动区域">
              <el-option label="区域一" value="1"></el-option>
              <el-option label="区域二" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="别名">
            <el-input v-model="form.otherName"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4 }"
              placeholder="请输入内容"
              v-model="form.describe"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="分类图片">
            <div>
              <el-input placeholder="请输入内容" v-model="form.imgclass">
                <template slot="prepend">Http://</template>
              </el-input>
            </div>
          </el-form-item>
          <el-form-item label="置顶分类">
            <el-switch v-model="form.top"></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">添加新分类</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="16">
        <el-table
          :default-sort="{ prop: 'date', order: 'ascending' }"
          border
          fit
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column min-width="140px" label="名称">
            <template slot-scope="{ row }">
              <router-link
                target="_blank"
                :to="'/post/' + row.id"
                class="link-type"
              >
                <span>{{ row.title }}</span>
              </router-link>
            </template>
          </el-table-column>

          <el-table-column width="120px" align="center" label="描述">
            <template slot-scope="scope">
              <span>{{ scope.row.author }}</span>
            </template>
          </el-table-column>

          <el-table-column width="100px" label="别名">
            <template slot-scope="scope">
              <svg-icon
                v-for="n in +scope.row.ownerTag"
                :key="n"
                icon-class="star"
                class="meta-item__icon"
              />
            </template>
          </el-table-column>

          <el-table-column class-name="status-col" label="总数" width="110">
            <template slot-scope="{ row }">
              <el-tag :type="row.status | statusFilter">
                {{ row.status }}
              </el-tag>
            </template>
          </el-table-column>

          <el-table-column align="center" label="操作" width="200">
            <template slot-scope="scope">
              <router-link :to="'/article/edit/' + scope.row.id">
                <el-button type="primary" size="mini" icon="el-icon-edit">
                  修改
                </el-button>
              </router-link>

              <el-button
                style="margin-left: 10px"
                type="danger"
                size="mini"
                icon="el-icon-edit"
                @click="delectArtive(scope.row.id)"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { newArticleClass } from '@/api/article'

export default {
  name: 'ArticleList',

  data() {
    return {
      form: {
        name: '',
        father: '',
        otherName: '',
        describe: '',
        imgclass: '',
        top: ''

      }
    }
  },
  created() {

  },
  methods: {
    onSubmit() {
      let that = this
      console.log(this.postForm)
      this.$refs.postForm.validate(valid => {
        if (valid) {
          this.loading = true
          newArticleClass(that.form).then(resp => {
            //做一个简单的返回数据判断
            if (resp.status === 200) {
              this.$notify({
                title: '成功',
                message: '创建分类成功',
                type: 'success',
                duration: 2000
              })
              this.loading = false
            } else {
              console.log("创建失败")
            }
          })
            .catch((e) => {
              console.log('error submit!!')
              this.loading = false
              this.$notify.error({
                title: '失败',
                message: '请检查网络连接',
              })
              return false
            })
        } else {
          this.loading = false
          console.log('error submit!!')
          return false
        }
      })
    },
  }
}
</script>

<style scoped>
</style>

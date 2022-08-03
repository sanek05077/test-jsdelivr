<template>
  <v-container>
    <v-row
      justify="center"
    >
      <v-col
        md="8"
      >
        <v-simple-table
          v-if="packages.length"
          class="list-packages"
        >
          <template>
            <thead>
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Version
              </th>
              <th class="text-left">
                Description
              </th>
            </tr>
            </thead>
            <tbody>
            <package-item
              v-for="(item, index) in packages"
              :key="index"
              :item="item.package"
            />
            </tbody>
          </template>
        </v-simple-table>
        <div class="text-center" v-if="packages.length === 0 && !isEmpty">
          <p>No packages found for your request</p>
        </div>
        <pagination-packages />
      </v-col>
    </v-row>
    <package-modal
      v-if="isShowModal"
      :package="packages"
    />
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import PackageItem from './PackageItem'
import PackageModal from './PackageModal'
import PaginationPackages from './PaginationPackages'

export default {
  name: 'PackageList',
  components: {
    PackageItem,
    PackageModal,
    PaginationPackages
  },
  computed: {
    ...mapGetters([
      'packages',
      'pagesLength'
    ]),
    isShowModal () {
      return this.$store.state.isShowModal
    },
    isEmpty () {
      return this.$store.state.isEmpty
    }
  }
}
</script>

<style lang="scss" scoped>
.list-packages {
  tr {
    &:hover {
      cursor: pointer;
    }
  }
  thead {
    tr {
      &:hover {
        cursor: default;
      }
    }
  }
}
</style>

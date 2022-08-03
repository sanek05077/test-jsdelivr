<template>
  <v-dialog
    v-model="isShowModal"
    max-width="420"
    @click:outside="closeDialog"
  >
    <v-card>
      <v-card-title class="text-h6">
        {{ currentPackage.name }}
      </v-card-title>

      <v-card-text>
        <v-list-item v-if="currentPackage.author">
          <v-list-item-content>
            <v-list-item-title><strong>Author:</strong> {{ currentPackage.author.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="currentPackage.author">
          <v-list-item-content>
            <v-list-item-title><strong>Email:</strong> {{ currentPackage.author.email }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="currentPackage.date">
          <v-list-item-content>
            <v-list-item-title><strong>Date:</strong> {{ getFormatDate(currentPackage.date) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="currentPackage.description">
          <v-list-item-content>
            <v-list-item-title><strong>Description:</strong> {{ currentPackage.description }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="currentPackage.version">
          <v-list-item-content>
            <v-list-item-title><strong>Version:</strong> {{ currentPackage.version }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="currentPackage.links">
          <v-list-item-content>
            <v-list-item-title><strong>Links:</strong>
              <a
                :href="currentPackage.links.homepage"
                class="v-list-item__link"
                v-if="currentPackage.links.homepage"
                target="_blank"
              ><v-icon> mdi-home </v-icon></a
              >
              <a
                :href="currentPackage.links.repository"
                class="v-list-item__link"
                v-if="currentPackage.links.repository"
                target="_blank"
              ><v-icon> mdi-github </v-icon></a
              >
              <a
                :href="currentPackage.links.npm"
                class="v-list-item__link"
                v-if="currentPackage.links.npm"
                target="_blank"
              ><v-icon> mdi-npm </v-icon></a
              >
              </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="currentPackage.keywords">
          <v-list-item-content>
            <v-list-item-title><strong>Keywords:</strong></v-list-item-title>
            <div class="v-list-item__keywords">
              <div
                class="v-list-item__keyword"
                v-for="(item, index) in currentPackage.keywords"
                :key="index"
              >
                ['{{ item }}']
              </div>
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="currentPackage.publisher">
          <v-list-item-content>
            <v-list-item-title><strong>Publisher:</strong> {{ currentPackage.publisher.username }}, {{ currentPackage.publisher.email }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="currentPackage.maintainers">
          <v-list-item-content>
            <v-list-item-title><strong>Maintainers:</strong>
              <div class="v-list-item__maintainers">
                <div
                  class="v-list-item__maintainer"
                  v-for="(item, index) in currentPackage.maintainers"
                  :key="index"
                >
                  User: {{ item.username }}<br/>
                  Email: {{ item.email }}
                </div>
              </div>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="green darken-1"
          text
          @click="closeModal"
        >
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import dateFormat from 'dateformat'
export default {
  name: 'PackageModal',
  props: {
    packages: Object
  },
  computed: {
    isShowModal () {
      return this.$store.state.isShowModal
    },
    currentPackage () {
      return this.$store.state.currentPackage
    }
  },
  methods: {
    closeModal () {
      this.$store.commit('triggerModal', false)
    },
    closeDialog () {
      this.$store.commit('triggerModal', false)
    },
    getFormatDate (date) {
      return dateFormat(date, 'fullDate')
    }
  }
}
</script>

<style lang="scss" scoped>
.v-list-item {
  padding: 0;
  min-height: 1px;
  &__content {
    padding: 5px 0;
  }
  &__title {
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.6);
    overflow: auto;
    white-space: normal;
    text-overflow: clip;
  }
  &__link {
    padding: 0 3px;
    display: inline-block;
  }
  &__keywords {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin: 0 -5px;
  }
  &__keyword {
    padding: 0 5px;
    color: rgba(0, 0, 0, 0.6);
  }
  &__maintainer {
    padding-bottom: 10px;
  }
}
</style>

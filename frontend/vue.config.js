const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// vue.config.js
module.exports = {
  vueCompilerOptions: {
    isCustomElement: tag => tag === 'DialogEndOfExam'
  }
};


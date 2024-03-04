import { defineStore } from 'pinia'
import axios from 'axios';

export const globalStore = defineStore('store', {
  state: () => ({
    loading: false,

    barChartData: false,
    bubbleChartData: false,
    doughnutChartData: false,
    lineChartData: false,
    polarChartData: false,
    radarChartData: false,
    scatterChartData: false,

    dataTableData: false
  }),
  getters: {
    getLoading(state) {
      return state.loading
    },

    getBarChartData(state) {
      return state.barChartData
    },
    getBubbleChartData(state) {
      return state.bubbleChartData
    },
    getDoughnutChartData(state) {
      return state.doughnutChartData
    },
    getLineChartData(state) {
      return state.lineChartData
    },
    getPolarChartData(state) {
      return state.polarChartData
    },
    getRadarChartData(state) {
      return state.radarChartData
    },
    getScatterChartData(state) {
      return state.scatterChartData
    },

    getDataTableData(state) {
      return state.dataTableData
    }
  },
  actions: {
    setLoading(state, status) {
      state.loading = status
    },

    retrieveBarChartData() {
      axios.get('../api/barChartData.json').then((response) => {
        this.barChartData = response.data;
      })
    },
    retrieveBubbleChartData() {
      axios.get('../api/bubbleChartData.json').then((response) => {
        this.bubbleChartData = response.data;
      })
    },
    retrieveDoughnutChartData() {
      axios.get('../api/doughnutChartData.json').then((response) => {
        this.doughnutChartData = response.data;
      })
    },
    retrieveLineChartData() {
      axios.get('../api/lineChartData.json').then((response) => {
        this.lineChartData = response.data;
      })
    },
    retrievePolarChartData() {
      axios.get('../api/polarAreaChartData.json').then((response) => {
        this.polarChartData = response.data;
      })
    },
    retrieveRadarChartData() {
      axios.get('../api/radarChartData.json').then((response) => {
        this.radarChartData = response.data;
      })
    },
    retrieveScatterChartData() {
      axios.get('../api/scatterChartData.json').then((response) => {
        this.scatterChartData = response.data;
      })
    },

    retrieveDataTableData() {
      axios.get('../api/dataTable.json').then((response) => {
        this.dataTableData = response.data;
      })
    }
  }
})
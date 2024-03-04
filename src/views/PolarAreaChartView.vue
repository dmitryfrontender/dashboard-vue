<template>
    <div class="card">
        <div class="card-header">
            <span class="page-title">Polar Area Chart</span>
        </div>
        <div class="card-body">
            <div class="chart-wrap">
                <PolarArea v-if="chartData" id="my-chart-id" :options="chartData.options" :data="chartData.data" />

                <template v-else>
                    <p>No data retrieved yet</p>
                    <br />
                    <button class="btn-action" @click="retrieveData">Get data</button>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { PolarArea } from 'vue-chartjs'
import axios from 'axios';

import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export default {
    name: 'PolarAreaChartView',
    components: {
        PolarArea
    },
    data() {
        return {
            chartData: false
        }
    },
    methods: {
        retrieveData: function () {
            axios.get('/api/polarAreaChartData.json').then((response) => {
                this.chartData = response.data;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    background-color: #fff;
    -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.card .card-header {
    border-bottom: 1px solid #e3e3e3;
    padding: 18px;
}

.card .card-date {
    padding: 30px 0;
    border-bottom: 1px solid #e3e3e3;
}

.card .btn-row {
    margin-top: 23px;
    margin-bottom: 23px;
}

.card .card-form .select-group {
    padding: 18px;
}

.card .card-form .input-group label {
    display: block;
}

.card .card-form .input-group input {
    width: 100%;
}

input[type='checkbox'] {
    display: none;
}

input[type='checkbox'] + label {
    font-size: 14px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    line-height: 1;
}

input[type='checkbox'] + label::before {
    content: '';
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid #e3e3e3;
    background-color: #fff;
    margin-right: 16px;
}

input[type='checkbox']:checked + label::before {
    background: #04ae00 url('../img/checkbox-bg.png') no-repeat center;
}

.checkbox-wrap {
    padding: 30px 0;
}

.checkbox-wrap .checkboxes {
    padding-top: 30px;
    height: 170px;
}

.checkbox-wrap .checkboxes .checkbox-group {
    padding: 12px 30px 12px 12px;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-basis: 33%;
    -ms-flex-preferred-size: 33%;
    flex-basis: 33%;
}

.checkbox-wrap .checkboxes .checkbox-group:hover {
    background-color: #f5f5f5;
}

.checkbox-wrap .checkboxes .checkbox-group:hover [class*='icon-'] {
    opacity: 1;
}

.checkbox-wrap .checkboxes .checkbox-group [class*='icon-'] {
    opacity: 0;
}

.datepicker-form .date-input-wrap {
    padding: 5px 0;
    display: inline-block;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    border: 1px solid #e3e3e3;
    color: #333;
    vertical-align: middle;
    margin-right: 12px;
}

.datepicker-form .date-input-wrap input {
    padding: 11px 16px;
    vertical-align: middle;
}

.datepicker-form .date-input-wrap input#to {
    border-left: 1px solid #e3e3e3;
}

.datepicker-form .date-input-wrap label {
    padding: 0 14px 0 10px;
    vertical-align: middle;
    display: inline-block;
}

.datepicker-form .btn {
    vertical-align: middle;
}

.btn {
    padding: 20px 44px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    color: #fff;
}

.btn:hover {
    color: #fff;
}

.btn-default {
    background-color: #979797;
}

.btn-default:hover {
    background-color: #bababa;
}

.btn-action {
    padding: 15px 21px;
    background-color: #f58220;
}

.btn-action:hover {
    background-color: #ffa200;
}

.btn-disabled {
    padding: 18px 75px;
    background-color: #e3e3e3;
    -webkit-border-radius: 3px;
    border-radius: 3px;
}

.form-control {
    border: 1px solid #e3e3e3;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    font-size: 12px;
    color: #333;
    width: 70px;
    height: 30px;
    font-family: 'Roboto', sans-serif;
}

.form-control:focus {
    border-color: #979797;
    outline: 0;
}

.form-control-input {
    width: 20px;
    height: 20px;
}

.chart-wrap {
    padding: 20px;

    canvas {
        height: 500px;
    }
}
</style>

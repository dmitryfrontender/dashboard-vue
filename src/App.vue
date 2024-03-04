<script setup>
import { RouterView } from 'vue-router'
import LoaderComponent from './components/partials/LoaderComponent.vue'
import HeaderComponent from './components/partials/HeaderComponent.vue'
import AsideComponent from './components/partials/AsideComponent.vue'
</script>

<template>
    <HeaderComponent />

    <AsideComponent />

    <main id="main">
        <div class="content-wrapper">
            <RouterView />
        </div>
    </main>

    <LoaderComponent />
</template>

<style lang="scss">
.page-title, .section-title {
  color: #a6a6a6;
  font-size: 16px;
  font-weight: 500;
}

.page-title {
  text-transform: uppercase;
}

.container {
  margin: 0 auto;
}

.container.sm {
  max-width: 684px;
}

.content-wrapper {
  padding: 18px;
  height: -webkit-calc(100vh - 62px);
  height: calc(100vh - 62px);
  overflow-y: auto;
}

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

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"] + label {
  font-size: 14px;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  line-height: 1;
}

input[type="checkbox"] + label::before {
  content: '';
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 1px solid #e3e3e3;
  background-color: #fff;
  margin-right: 16px;
}

input[type="checkbox"]:checked + label::before {
  background: #04ae00 url("../img/checkbox-bg.png") no-repeat center;
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
  font-family: "Roboto", sans-serif;
}

.form-control:focus {
  border-color: #979797;
  outline: 0;
}

.form-control-input {
  width: 20px;
  height: 20px;
}

.table {
  font-size: 16px;
  border-collapse: collapse;
}

.table tbody tr:hover {
  background-color: #f1f3f3;
}

.table tbody tr:hover .hide-icons {
  opacity: 1;
}

.table tbody tr:last-child td {
  border-bottom: 1px solid #e3e3e3;
}

.table tbody .hide-icons {
  opacity: 0;
  -webkit-transition: all .2s linear;
  -o-transition: all .2s linear;
  transition: all .2s linear;
}

.table td {
  padding: 18px;
  border-top: 1px solid #e3e3e3;
}

.table .blue-link {
  color: #56819f;
}

.table .icon-trash {
  margin-left: 20px;
}

.table-small {
  font-size: 13px;
  border-collapse: collapse;
}

.table-small td {
  padding: 18px;
  border-top: 1px solid #e3e3e3;
}

.table-small tbody tr:hover {
  background-color: #f1f3f3;
}

.table-small thead th {
  padding-left: 19px;
  padding-top: 35px;
  padding-bottom: 15px;
  color: #a6a6a6;
}

.table-small thead th:hover {
  background-color: #f5f5f5;
  color: #000;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

.table-small thead th:hover .block-on-hover {
  opacity: 1;
}

.table-small thead th:hover .icon-arrow-up-small {
  font-size: 10px;
}

.block-on-hover {
  opacity: 0;
  display: inline;
  padding: 7px 7px;
}

.block-on-hover i {
  display: inline-block;
}

nav {
  text-align: center;
}

nav .pagination li a {
  border: none;
  color: #56819f;
}

nav .pagination i {
  font-size: 12px;
  vertical-align: middle;
  color: #bababa;
}

nav .pagination li a:hover {
  -webkit-border-radius: 5px;
          border-radius: 5px;
  color: #a6a6a6;
}

.modal {
  background-color: #fff;
  display: none;
}

#links {
  max-width: 1075px;
  min-height: 100px;
  width: 100%;
}

#main {
  padding-left: 188px;
  padding-top: 62px;
}

._mobileSidebar #main {
  padding-left: 50px;
}

._mobileSidebar #aside {
  width: 50px;
}

._mobileSidebar #aside .logo {
  display: none;
}

._mobileSidebar #aside .menu-control {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

._mobileSidebar #aside .aside-menu li {
  text-align: center;
  position: relative;
}

._mobileSidebar #aside .aside-menu li:hover a span {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  padding-left: 20px;
  width: 150px;
  min-height: auto;
}

._mobileSidebar #aside .aside-menu li a i {
  margin-right: 0;
  margin-left: -4px;
}

._mobileSidebar #aside .aside-menu li a span {
  display: none;
  position: absolute;
  background-color: #282828;
  left: 100%;
  top: 0;
  height: 100%;
  min-height: 150px;
}

._mobileSidebar #aside .your-manager {
  display: none;
}

.generate-links input[type="text"] {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}

.generate-links .btn {
  margin-left: 15px;
}

.generate-links .btn i {
  vertical-align: sub;
}

</style>

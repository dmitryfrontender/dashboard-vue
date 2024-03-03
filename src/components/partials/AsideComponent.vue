<template>
    <aside id="aside" class="fixed-to-top">
        <div class="menu-control justify-sb flex-container align-center">
            <div class="logo">
                <RouterLink to="/">
                    <img src="@/assets/img/logo.png" alt="" />
                </RouterLink>
            </div>
            <div class="menu-btn"  @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="aside-menu">
            <ul>
                <li class="active">
                    <RouterLink to="/">
                        <IconComponent className="icon-general" />
                        <span>General</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="">
                        <IconComponent className="icon-details" />
                        <span>Details</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/links">
                        <IconComponent className="icon-links" />
                        <span>Links</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="">
                        <IconComponent className="icon-banners" />
                        <span>Banners</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="">
                        <IconComponent className="icon-personaldata" />
                        <span>Personal data</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="">
                        <IconComponent className="icon-payout" />
                        <span>Payout</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="">
                        <IconComponent className="icon-postback" />
                        <span>Postback</span>
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div class="your-manager">
            <div class="your-manager-title">
                <span>Your manager</span>
            </div>
            <div class="manager flex-container align-center justify-sb">
                <div class="foto-manager">
                    <img src="@/assets/img/foto-one.png" alt="">
                </div>
                <div class="circle"></div>
                <RouterLink to="">Mikhael E.</RouterLink>
            </div>
        </div>
    </aside>
</template>

<script>
import IconComponent from '@/components/shared/IconComponent.vue';
import { RouterLink } from "vue-router";

export default {
    name: 'AsideComponent',
    components: {
        IconComponent,
        RouterLink
    },
    methods: {
        toggleMenu() {
            const body = document.querySelector('body')
            body.classList.toggle('_mobileSidebar')
        }
    }
}
</script>

<style lang="scss">
#aside .aside-menu ul li.active a,
#aside .aside-menu ul li a:hover {
    border-left-color: #f58220;
    background-color: #282828;
    color: #fff;
}

#aside {
    background-color: #191919;
    width: 188px;
    height: 100vh;
    left: 0;
    z-index: 100;
}

#aside .menu-control {
    padding: 18px;
}

#aside .menu-control .menu-btn {
    cursor: pointer;
}

#aside .menu-control .menu-btn span {
    display: block;
    width: 18px;
    height: 2px;
    background-color: #979797;
}

#aside .menu-control .menu-btn span + span {
    margin-top: 5px;
}

#aside .aside-menu ul li {
    color: #979797;
}

#aside .aside-menu ul li a {
    display: block;
    padding: 14px;
    border-left: 4px solid transparent;
}

#aside .aside-menu ul li a [class*='icon-'] {
    font-size: 17px;
    margin-right: 15px;
}

.your-manager {
    padding: 26px 52px 0 18px;
    border-top: 1px solid #333;
    margin-top: 25px;
}

.your-manager span {
    text-transform: uppercase;
    font-size: 14px;
    color: #9c9c9c;
}

.your-manager .manager {
    margin-top: 18px;
    position: relative;
}

.your-manager .manager a {
    color: #56819f;
}

.your-manager .manager a:hover {
    color: #f58220;
}

.your-manager .manager .circle {
    padding: 6px 6px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-color: #04ae00;
    position: absolute;
    top: 0;
    left: 32px;
}

.your-manager .manager img {
    width: 43px;
    height: 43px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
</style>

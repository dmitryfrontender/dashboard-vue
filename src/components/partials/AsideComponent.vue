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
                <li :class="$route.name === 'bar' ? 'active' : ''">
                    <RouterLink to="/bar">
                        <IconComponent className="icon-general" />
                        <span>Bar chart</span>
                    </RouterLink>
                </li>
                <li :class="$route.name === 'line' ? 'active' : ''">
                    <RouterLink to="/line">
                        <IconComponent className="icon-details" />
                        <span>Line chart</span>
                    </RouterLink>
                </li>
                <li :class="$route.name === 'scatter' ? 'active' : ''">
                    <RouterLink to="/scatter">
                        <IconComponent className="icon-links" />
                        <span>Scatter chart</span>
                    </RouterLink>
                </li>
                <li :class="$route.name === 'bubble' ? 'active' : ''">
                    <RouterLink to="/bubble">
                        <IconComponent className="icon-banners" />
                        <span>Bubble chart</span>
                    </RouterLink>
                </li>
                <li :class="$route.name === 'doughnut' ? 'active' : ''">
                    <RouterLink to="/doughnut">
                        <IconComponent className="icon-personaldata" />
                        <span>Doughnut chart</span>
                    </RouterLink>
                </li>
                <li :class="$route.name === 'polar' ? 'active' : ''">
                    <RouterLink to="/polar">
                        <IconComponent className="icon-payout" />
                        <span>Polar area chart</span>
                    </RouterLink>
                </li>
                <li :class="$route.name === 'radar' ? 'active' : ''">
                    <RouterLink to="/radar">
                        <IconComponent className="icon-postback" />
                        <span>Radar chart</span>
                    </RouterLink>
                </li>
            </ul>
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
</style>

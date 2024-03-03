<template>
    <header id="header" class="fixed-to-top">
        <div class="flex-container justify-end">
            <div
                class="user-control dropdown-wrap"
                :class="{ 'open': open }"
                @click.prevent="openMenu"
            >
                <IconComponent className="icon-wallet" />
                <span>$1,500.00</span>
                <IconComponent className="icon-arrow-down" />
                <div class="dropdown-menu">
                    <ul>
                        <li>
                            <LinkComponent url="" class="dropdown-link">
                                CPA <span>$1000</span>
                            </LinkComponent>
                        </li>
                        <li>
                            <LinkComponent url="" class="dropdown-link">
                                CPL <span>$1100</span>
                            </LinkComponent>
                        </li>
                        <li>
                            <LinkComponent url="" class="dropdown-link">
                                Turnover <span>$1030</span>
                            </LinkComponent>
                        </li>
                        <li>
                            <LinkComponent url="" class="dropdown-link">
                                Net deposit <span>$1000</span>
                            </LinkComponent>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="user-control">
                <span class="circle-one"></span>
                <IconComponent className="icon-notification" />
            </div>
            <div class="user-control">
                <IconComponent className="icon-profile" />
                <span class="blue-text">Leonardo Dicaprio</span>
            </div>
            <div class="user-control">
                <IconComponent className="icon-quit" />
            </div>
        </div>
    </header>
</template>

<script>
import IconComponent from '@/components/shared/IconComponent.vue';
import LinkComponent from '@/components/shared/LinkComponent.vue';

export default {
    name: 'HeaderComponent',
    components: {
        IconComponent,
        LinkComponent
    },
    data() {
        return {
            open: false
        }
    },
    methods: {
        openMenu() {
            this.open = !this.open
        }
    }
}
</script>

<style lang="scss" scoped>
#header {
    width: 100%;
    border-bottom: 1px solid #e3e3e3;
    background-color: #fff;

    .user-control {
        padding: 18px;
        border-left: 1px solid #e3e3e3;
        font-weight: 400;
        font-size: 20px;
        color: #9c9c9c;
        position: relative;
    }

    .user-control > span {
        margin: 0 20px 0 15px;
    }

    .user-control .icon-arrow-down {
        font-size: 12px;
    }

    .user-control .blue-text {
        font-weight: 300;
        font-size: 13px;
        color: #56819f;
        vertical-align: middle;
    }

    .user-control .circle-one {
        padding: 4px 4px;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        background-color: #f58220;
        position: absolute;
        left: 15px;
        top: 15px;
    }

    .dropdown-menu {
        display: none;
        position: absolute;
        padding: 10px 18px 24px;
        background-color: #f5f5f5;
        top: 100%;
        left: 0;
        right: 0;

        li {
            font-size: 12px;
        }

        li + li {
            margin-top: 13px;
        }

        span {
            color: #000;
        }

        .dropdown-link {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
            &:hover {
                color: #f58220;
            }
        }
    }

    .user-control.open {
        background-color: #f5f5f5;

        .dropdown-menu {
            display: block;
        }
    }

    .user-control.open .icon-arrow-down {
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
        display: inline-block;
        line-height: 0;
    }

    .user-control .icon-profile {
        vertical-align: middle;
    }

    .user-control:hover {
        background-color: #f5f5f5;
    }
}
</style>

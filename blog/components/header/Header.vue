<template>
    <nav>
        <div class="logo">十月</div>
        <ul class="nav_menu" :class="{'open':isActive}">
            <li v-for="(item,index) in navList" :key="index" :class="{'focus':currentIndex===index}" @click="togglePage(index)">
                <nuxt-link :to="item.path">{{item.name}}
                </nuxt-link>
            </li>
        </ul>
        <div class="burger" :class="{'active':isActive}" @click="toggleNav">
            <div class="top_line"></div>
            <div class="middle_line"></div>
            <div class="bottom_line"></div>
        </div>
    </nav>
</template>

<script>
  export default {
    data() {
      return {
        navList: [{ name: 'blog', path: '/' }, { name: 'new Blog', path: '/write' }, { name: 'about', path: '/about' }],
        isActive: false,
        currentIndex: 0
      }
    },
    methods: {
      togglePage(index) {
        this.currentIndex = index
      },
      toggleNav(){
        this.isActive = !this.isActive;
      }
    }
  }
</script>

<style lang="less" scoped>
    nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;;
        justify-content: space-between;
        padding: 0 30vw 0 5vw;
        height: 60px;
        background-color: rgba(65, 81, 101, .9);
        z-index:100;
        .logo {
            font-size: 24px;
            font-weight: 600;
            color: #dadbdd;
        }

        .nav_menu {
            list-style: none;
            display: flex;
            flex: 1;
            flex-direction: row;
            justify-content: space-between;
            max-width: 350px;

            & > li {
                width: 150px;
                line-height: 60px;
                text-align: center;
                color: #dadbdd;
                font-weight: 800;
                font-size: 18px;
                &.focus{
                    background-color: #79a8a9;
                }
                & > a {
                    display:inline-block;
                    width: inherit;
                    height: inherit;
                    text-decoration: none;
                    color: inherit;
                }
            }
        }

        .burger > div {
            width: 25px;
            height: 3px;
            background-color: #dadbdd;
            margin: 4px;
        }

        .burger {
            display: none;
        }
    }

    @media screen and (max-width: 768px) {
        nav {
            padding: 0 5vw;

            .nav_menu {
                position: fixed;
                top: 60px;
                right: 0;
                z-index:1600;
                bottom: 0;
                width: 300px;
                height: calc(100vh - 60px);

                color: #fff;
                background-color: rgba(65, 81, 101, .9);
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                transform: translateX(100%);
                transition: .3s ease-in-out;

                &.open {
                    transform: translateX(0);
                }

                & li {
                    width:inherit;
                    opacity: 1;
                    a{
                        width:inherit;
                    }
                }

            }

            .burger {
                display: block;

                & > div {
                    transition: all .3s ease-in-out;
                }

                &.active {
                    transition: all .3s ease-in-out .3s;

                    .top_line {
                        transform: rotate(45deg) translate(4px, 6px);
                    }

                    .bottom_line {
                        transform: rotate(-45deg) translate(4px, -6px);
                    }

                    .middle_line {
                        transform: translateX(100%);
                        opacity: 0;
                        transition: .3s ease-in-out;
                    }
                }
            }
        }
    }
</style>

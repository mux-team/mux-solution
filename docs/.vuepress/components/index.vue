<template>
    <div id="index">
        <div class="logo"></div>
        <h1>移动体验解决方案</h1>
        <p class="desc">打造移动站点极致体验</p>
        <div class="index-content">
            <div class="card">
                <h2>体验提升文档</h2>
                <p>完整的了解如何系统的去提高站点体验，打造接近 App 的站点体验</p>
                <router-link :to="{path: '/wiki/'}" class="card-btn">查看详情</router-link>
                <i class="wiki-icon"></i>
            </div>
            <div class="card">
                <h2>体验解决方案库</h2>
                <p>提供直接可用的方案，从各个维度去提升站点体验，包含文档、工具、代码库</p>
                <router-link :to="{path: '/solution/'}" class="card-btn">查看详情</router-link>
                <i class="solution-icon"></i>
            </div>
        </div>
        <footer>MIT Licensed | Copyright ©2018 MUX</footer>
    </div>
</template>

<style lang="stylus" scoped>
$accentColor = #38f
$borderColor = #eaecef

#index
    background-color #fafafa
    overflow hidden

    .logo
        width 180px
        height 180px
        background url(./img/logo.svg) 50% 50% no-repeat
        background-size contain
        margin 60px auto 10px

    h1
        font-size 44px
        color #000
        margin 0 auto
        text-align center

    .desc
        font-size 16px
        color #999
        text-align center
        letter-spacing 1.3em
        padding-left 1.3em
        margin 10px auto 60px

    .index-content
        display flex
        margin 0 auto 40px
        width 1100px

    .card
        width 50%
        box-sizing border-box
        padding 20px 40px
        height 290px
        border 1px solid $borderColor
        margin 0 10px
        background-color #fff
        position relative

        h2
            font-size 24px
            color #000
            border 0
            margin-bottom 10px

        p
            width 300px
            margin-top 10px

        .card-btn
            display inline-block
            border 1px solid #999
            color #333
            padding 10px 25px
            border-radius 30px
            margin-top 50px
            transition all 0.2s ease

            &:hover
                border-color $accentColor
                color $accentColor

        .wiki-icon
            background url(./img/wiki.svg)


        .solution-icon
            background url(./img/solution.svg)

        .wiki-icon,
        .solution-icon
            width 100px
            height 100px
            position absolute
            right 40px
            bottom 40px
            background-size contain
            opacity .1




    footer
        margin 0 auto 40px
        text-align center
        color #999



</style>

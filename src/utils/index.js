import Recommend from '../page/discover/recommend'
import Rank from '../page/discover/rank'
import Song from '../page/discover/song'
import RadioStation from '../page/discover/radioStation'
import Singer from '../page/discover/singer'
import Disc from '../page/discover/disc'

export const recommendList = [
    {
        name: '推荐',
        path: '/recommend',
        exact: true,
        component: Recommend
    },
    {
        name: '排行榜',
        path: '/rank',
        exact: false,
        component: Rank
    },
    {
        name: '歌单',
        path: '/song',
        exact: false,
        component: Song
    },
    {
        name: '主播电台',
        path: '/radioStation',
        exact: false,
        component: RadioStation
    },
    {
        name: '歌手',
        path: '/singer',
        exact: false,
        component: Singer
    },
    {
        name: '新碟上架',
        path: '/disc',
        exact: false,
        component: Disc
    },
]
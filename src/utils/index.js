import Recommend from '../page/discover/recommend'
import Rank from '../page/discover/rank'
import Song from '../page/discover/song'
import RadioStation from '../page/discover/radioStation'
import Singer from '../page/discover/singer'
import Disc from '../page/discover/disc'

export const recommendList = [
    {
        name: '推荐',
        path: '/discover/recommend',
        component: Recommend
    },
    {
        name: '排行榜',
        path: '/discover/rank',
        component: Rank
    },
    {
        name: '歌单',
        path: '/discover/song',
        component: Song
    },
    {
        name: '主播电台',
        path: '/discover/radioStation',
        component: RadioStation
    },
    {
        name: '歌手',
        path: '/discover/singer',
        component: Singer
    },
    {
        name: '新碟上架',
        path: '/discover/disc',
        component: Disc
    },
]
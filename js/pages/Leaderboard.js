import { localize } from '../util.js';
import Spinner from '../components/Spinner.js';

export default {
    components: {
        Spinner,
    },
    data: () => ({
        leaderboard: [
            {
                user: "th3name",
                total: 490.93,
                verified: [
                    { rank: 1, level: "5 clicks championz", score: 50.00, link: "https://youtube.com" },
                    { rank: 5, level: "Pain engine underrat", score: 38.65, link: "https://youtube.com" },
                    { rank: 12, level: "Happy corridor", score: 24.63, link: "https://youtube.com" }
                ],
                completed: [
                    { rank: 2, level: "Me when 5ccl", score: 46.88, link: "https://youtube.com" },
                    { rank: 4, level: "The muncher", score: 41.22, link: "https://youtube.com" },
                    { rank: 6, level: "Pain engine", score: 36.24, link: "https://youtube.com" },
                    { rank: 7, level: "Color", score: 33.98, link: "https://youtube.com" },
                    { rank: 8, level: "Pickle Rick Accuracy", score: 31.86, link: "https://youtube.com" },
                    { rank: 9, level: "Uousstbzxvfm", score: 29.87, link: "https://youtube.com" },
                    { rank: 10, level: "August 12 2036", score: 28.01, link: "https://youtube.com" },
                    { rank: 11, level: "Dikle Sick Assary", score: 26.27, link: "https://youtube.com" },
                    { rank: 13, level: "Five", score: 23.09, link: "https://youtube.com" },
                    { rank: 14, level: "Frost bite", score: 21.65, link: "https://youtube.com" },
                    { rank: 16, level: "5 ig", score: 19.04, link: "https://youtube.com" },
                    { rank: 17, level: "WeeHee Wave", score: 17.85, link: "https://youtube.com" },
                    { rank: 18, level: "Gravity challenge", score: 16.74, link: "https://youtube.com" },
                    { rank: 19, level: "FPH", score: 15.69, link: "https://youtube.com" },
                    { rank: 20, level: "Tsrif II", score: 14.71, link: "https://youtube.com" },
                    { rank: 22, level: "5 Clicks of doom", score: 12.94, link: "https://youtube.com" },
                    { rank: 23, level: "Unwaved 130", score: 12.13, link: "https://youtube.com" },
                    { rank: 24, level: "Go cloud", score: 11.37, link: "https://youtube.com" },
                    { rank: 25, level: "5 click redo", score: 10.66, link: "https://youtube.com" },
                    { rank: 26, level: "Tsrif", score: 10.00, link: "https://youtube.com" }
                ],
                progressed: []
            },
            {
                user: "tFluffy",
                total: 365.84,
                verified: [
                    { rank: 3, level: "Jungle probably", score: 43.96, link: "https://youtube.com" }
                ],
                completed: [
                    { rank: 4, level: "The muncher", score: 41.22, link: "https://youtube.com" },
                    { rank: 6, level: "Pain engine", score: 36.24, link: "https://youtube.com" },
                    { rank: 7, level: "Color", score: 33.98, link: "https://youtube.com" },
                    { rank: 10, level: "August 12 2036", score: 28.01, link: "https://youtube.com" },
                    { rank: 13, level: "Five", score: 23.09, link: "https://youtube.com" },
                    { rank: 14, level: "Frost bite", score: 21.65, link: "https://youtube.com" },
                    { rank: 17, level: "WeeHee Wave", score: 17.85, link: "https://youtube.com" },
                    { rank: 18, level: "Gravity challenge", score: 16.74, link: "https://youtube.com" },
                    { rank: 19, level: "FPH", score: 15.69, link: "https://youtube.com" },
                    { rank: 20, level: "Tsrif II", score: 14.71, link: "https://youtube.com" },
                    { rank: 22, level: "5 Clicks of doom", score: 12.94, link: "https://youtube.com" },
                    { rank: 23, level: "Unwaved 130", score: 12.13, link: "https://youtube.com" },
                    { rank: 24, level: "Go cloud", score: 11.37, link: "https://youtube.com" },
                    { rank: 25, level: "5 click redo", score: 10.66, link: "https://youtube.com" },
                    { rank: 26, level: "Tsrif", score: 10.00, link: "https://youtube.com" }
                ],
                progressed: []
            },
            {
                user: "Goofdude",
                total: 327.89,
                verified: [
                    { rank: 7, level: "Color", score: 33.98, link: "https://youtube.com" },
                    { rank: 15, level: "Hooray", score: 20.30, link: "https://youtube.com" },
                    { rank: 21, level: "Pain engine overrated", score: 13.80, link: "https://youtube.com" }
                ],
                completed: [
                    { rank: 4, level: "The muncher", score: 41.22, link: "https://youtube.com" },
                    { rank: 6, level: "Pain engine", score: 36.24, link: "https://youtube.com" },
                    { rank: 10, level: "August 12 2036", score: 28.01, link: "https://youtube.com" },
                    { rank: 13, level: "Five", score: 23.09, link: "https://youtube.com" },
                    { rank: 14, level: "Frost bite", score: 21.65, link: "https://youtube.com" },
                    { rank: 17, level: "WeeHee Wave", score: 17.85, link: "https://youtube.com" },
                    { rank: 18, level: "Gravity challenge", score: 16.74, link: "https://youtube.com" },
                    { rank: 19, level: "FPH", score: 15.69, link: "https://youtube.com" },
                    { rank: 20, level: "Tsrif II", score: 14.71, link: "https://youtube.com" },
                    { rank: 22, level: "5 Clicks of doom", score: 12.94, link: "https://youtube.com" },
                    { rank: 24, level: "Go cloud", score: 11.37, link: "https://youtube.com" },
                    { rank: 25, level: "5 click redo", score: 10.66, link: "https://youtube.com" },
                    { rank: 26, level: "Tsrif", score: 10.00, link: "https://youtube.com" }
                ],
                progressed: []
            },
            {
                user: "Imunderscore",
                total: 270.12,
                verified: [
                    { rank: 13, level: "Five", score: 23.09, link: "https://youtube.com" },
                    { rank: 18, level: "Gravity challenge", score: 16.74, link: "https://youtube.com" },
                    { rank: 25, level: "5 click redo", score: 10.66, link: "https://youtube.com" }
                ],
                completed: [
                    { rank: 7, level: "Color", score: 33.98, link: "https://youtube.com" },
                    { rank: 10, level: "August 12 2036", score: 28.01, link: "https://youtube.com" },
                    { rank: 14, level: "Frost bite", score: 21.65, link: "https://youtube.com" },
                    { rank: 17, level: "WeeHee Wave", score: 17.85, link: "https://youtube.com" },
                    { rank: 19, level: "FPH", score: 15.69, link: "https://youtube.com" },
                    { rank: 20, level: "Tsrif II", score: 14.71, link: "https://youtube.com" },
                    { rank: 22, level: "5 Clicks of doom", score: 12.94, link: "https://youtube.com" },
                    { rank: 23, level: "Unwaved 130", score: 12.13, link: "https://youtube.com" },
                    { rank: 24, level: "Go cloud", score: 11.37, link: "https://youtube.com" },
                    { rank: 26, level: "Tsrif", score: 10.00, link: "https://youtube.com" }
                ],
                progressed: []
            },
            {
                user: "BlissBee",
                total: 201.33,
                verified: [
                    { rank: 8, level: "Pickle Rick Accuracy", score: 31.86, link: "https://youtube.com" },
                    { rank: 11, level: "Dikle Sick Assary", score: 26.27, link: "https://youtube.com" }
                ],
                completed: [
                    { rank: 9, level: "Uousstbzxvfm", score: 29.87, link: "https://youtube.com" },
                    { rank: 13, level: "Five", score: 23.09, link: "https://youtube.com" },
                    { rank: 19, level: "FPH", score: 15.69, link: "https://youtube.com" },
                    { rank: 20, level: "Tsrif II", score: 14.71, link: "https://youtube.com" },
                    { rank: 22, level: "5 Clicks of doom", score: 12.94, link: "https://youtube.com" },
                    { rank: 23, level: "Unwaved 130", score: 12.13, link: "https://youtube.com" },
                    { rank: 24, level: "Go cloud", score: 11.37, link: "https://youtube.com" },
                    { rank: 25, level: "5 click redo", score: 10.66, link: "https://youtube.com" },
                    { rank: 26, level: "Tsrif", score: 10.00, link: "https://youtube.com" }
                ],
                progressed: []
            },
            {
                user: "FoldedZero",
                total: 152.41,
                verified: [],
                completed: [
                    { rank: 10, level: "August 12 2036", score: 28.01, link: "https://youtube.com" },
                    { rank: 14, level: "Frost bite", score: 21.65, link: "https://youtube.com" },
                    { rank: 17, level: "WeeHee Wave", score: 17.85, link: "https://youtube.com" },
                    { rank: 19, level: "FPH", score: 15.69, link: "https://youtube.com" },
                    { rank: 20, level: "Tsrif II", score: 14.71, link: "https://youtube.com" },
                    { rank: 22, level: "5 Clicks of doom", score: 12.94, link: "https://youtube.com" },
                    { rank: 23, level: "Unwaved 130", score: 12.13, link: "https://youtube.com" },
                    { rank: 24, level: "Go cloud", score: 11.37, link: "https://youtube.com" },
                    { rank: 26, level: "Tsrif", score: 10.00, link: "https://youtube.com" }
                ],
                progressed: []
            },
            {
                user: "ZenosSins",
                total: 127.08,
                verified: [
                    { rank: 4, level: "The muncher", score: 41.22, link: "https://youtube.com" }
                ],
                completed: [
                    { rank: 2, level: "Me when 5ccl", score: 46.88, link: "https://youtube.com" },
                    { rank: 7, level: "Color", score: 33.98, link: "https://youtube.com" }
                ],
                progressed: []
            },
            {
                user: "Anticroom",
                total: 109.00,
                verified: [],
                completed: [
                    { rank: 7, level: "Color", score: 33.98, link: "https://youtube.com" },
                    { rank: 10, level: "August 12 2036", score: 28.01, link: "https://youtube.com" },
                    { rank: 14, level: "Frost bite", score: 21.65, link: "https://youtube.com" },
                    { rank: 19, level: "FPH", score: 15.69, link: "https://youtube.com" }
                ],
                progressed: []
            },
            {
                user: "Yeevool3946",
                total: 84.24,
                verified: [
                    { rank: 20, level: "Tsrif II", score: 14.71, link: "https://youtube.com" },
                    { rank: 22, level: "5 Clicks of doom", score: 12.94, link: "https://youtube.com" }
                ],
                completed: [
                    { rank: 14, level: "Frost bite", score: 21.65, link: "https://youtube.com" },
                    { rank: 23, level: "Unwaved 130", score: 12.13, link: "https://youtube.com" },
                    { rank: 24, level: "Go cloud", score: 11.37, link: "https://youtube.com" },
                    { rank: 26, level: "Tsrif", score: 10.00, link: "https://youtube.com" }
                ],
                progressed: []
            },
            {
                user: "Dajvid07",
                total: 63.90,
                verified: [
                    { rank: 24, level: "Go cloud", score: 11.37, link: "https://youtube.com" }
                ],
                completed: [
                    { rank: 19, level: "FPH", score: 15.69, link: "https://youtube.com" },
                    { rank: 20, level: "Tsrif II", score: 14.71, link: "https://youtube.com" },
                    { rank: 23, level: "Unwaved 130", score: 12.13, link: "https://youtube.com" },
                    { rank: 26, level: "Tsrif", score: 10.00, link: "https://youtube.com" }
                ],
                progressed: []
            },
            {
                user: "Greenn3xus",
                total: 60.91,
                verified: [
                    { rank: 19, level: "FPH", score: 15.69, link: "https://youtube.com" },
                    { rank: 23, level: "Unwaved 130", score: 12.13, link: "https://youtube.com" }
                ],
                completed: [
                    { rank: 14, level: "Frost bite", score: 21.65, link: "https://youtube.com" },
                    { rank: 26, level: "Tsrif", score: 10.00, link: "https://youtube.com" }
                ],
                progressed: []
            },
            {
                user: "86bottles",
                total: 47.72,
                verified: [
                    { rank: 26, level: "Tsrif", score: 10.00, link: "https://youtube.com" }
                ],
                completed: [
                    { rank: 19, level: "FPH", score: 15.69, link: "https://youtube.com" },
                    { rank: 24, level: "Go cloud", score: 11.37, link: "https://youtube.com" },
                    { rank: 25, level: "5 click redo", score: 10.66, link: "https://youtube.com" }
                ],
                progressed: []
            },
            {
                user: "Moen22",
                total: 37.80,
                verified: [
                    { rank: 14, level: "Frost bite", score: 21.65, link: "https://youtube.com" }
                ],
                completed: [
                    { rank: 20, level: "Tsrif II", score: 14.71, link: "https://youtube.com" }
                ],
                progressed: []
            },
            {
                user: "kBingo",
                total: 36.24,
                verified: [],
                completed: [
                    { rank: 7, level: "Color", score: 33.98, link: "https://youtube.com" }
                ],
                progressed: []
            },
            {
                user: "Starys2",
                total: 36.24,
                verified: [],
                completed: [
                    { rank: 7, level: "Color", score: 33.98, link: "https://youtube.com" }
                ],
                progressed: []
            }
        ],
        loading: false,
        selected: 0,
        err: [],
    }),
    template: `
        <main v-if="loading">
            <Spinner></Spinner>
        </main>
        <main v-else class="page-leaderboard-container">
            <div class="page-leaderboard">
                <div class="error-container">
                    <p class="error" v-if="err.length > 0">
                        Leaderboard may be incorrect, as the following levels could not be loaded: {{ err.join(', ') }}
                    </p>
                </div>
                <div class="board-container">
                    <table class="board">
                        <tr v-for="(ientry, i) in leaderboard">
                            <td class="rank">
                                <p class="type-label-lg">#{{ i + 1 }}</p>
                            </td>
                            <td class="total">
                                <p class="type-label-lg">{{ localize(ientry.total) }}</p>
                            </td>
                            <td class="user" :class="{ 'active': selected == i }">
                                <button @click="selected = i">
                                    <span class="type-label-lg">{{ ientry.user }}</span>
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="player-container">
                    <div class="player">
                        <h1>#{{ selected + 1 }} {{ entry.user }}</h1>
                        <h3>{{ entry.total.toFixed(2) }}</h3>
                        <h2 v-if="entry.verified.length > 0">Verified ({{ entry.verified.length }})</h2>
                        <table class="table">
                            <tr v-for="score in entry.verified">
                                <td class="rank">
                                    <p>#{{ score.rank }}</p>
                                </td>
                                <td class="level">
                                    <a class="type-label-lg" target="_blank" :href="score.link">{{ score.level }}</a>
                                </td>
                                <td class="score">
                                    <p>+{{ localize(score.score) }}</p>
                                </td>
                            </tr>
                        </table>
                        <h2 v-if="entry.completed.length > 0">Completed ({{ entry.completed.length }})</h2>
                        <table class="table">
                            <tr v-for="score in entry.completed">
                                <td class="rank">
                                    <p>#{{ score.rank }}</p>
                                </td>
                                <td class="level">
                                    <a class="type-label-lg" target="_blank" :href="score.link">{{ score.level }}</a>
                                </td>
                                <td class="score">
                                    <p>+{{ localize(score.score) }}</p>
                                </td>
                            </tr>
                        </table>
                        <h2 v-if="entry.progressed.length > 0">Progressed ({{ entry.progressed.length }})</h2>
                        <table class="table">
                            <tr v-for="score in entry.progressed">
                                <td class="rank">
                                    <p>#{{ score.rank }}</p>
                                </td>
                                <td class="level">
                                    <a class="type-label-lg" target="_blank" :href="score.link">{{ score.percent }}% {{ score.level }}</a>
                                </td>
                                <td class="score">
                                    <p>+{{ localize(score.score) }}</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    `,
    computed: {
        entry() {
            return this.leaderboard[this.selected];
        },
    },
    methods: {
        localize,
    },
};

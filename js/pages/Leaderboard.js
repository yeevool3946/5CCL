import { localize } from '../util.js';
import Spinner from '../components/Spinner.js';

export default {
    components: {
        Spinner,
    },
    data: () => ({
        leaderboard: [
            { user: "th3name", total: 490.93, verified: [], completed: [], progressed: [] },
            { user: "tFluffy", total: 365.84, verified: [], completed: [], progressed: [] },
            { user: "Goofdude", total: 327.89, verified: [], completed: [], progressed: [] },
            { user: "Imunderscore", total: 270.12, verified: [], completed: [], progressed: [] },
            { user: "BlissBee", total: 201.33, verified: [], completed: [], progressed: [] },
            { user: "FoldedZero", total: 152.41, verified: [], completed: [], progressed: [] },
            { user: "ZenosSins", total: 127.08, verified: [], completed: [], progressed: [] },
            { user: "Anticroom", total: 109.00, verified: [], completed: [], progressed: [] },
            { user: "Yeevool3946", total: 84.24, verified: [], completed: [], progressed: [] },
            { user: "Dajvid07", total: 63.90, verified: [], completed: [], progressed: [] },
            { user: "Greenn3xus", total: 60.91, verified: [], completed: [], progressed: [] },
            { user: "86bottles", total: 47.72, verified: [], completed: [], progressed: [] },
            { user: "Moen22", total: 37.80, verified: [], completed: [], progressed: [] },
            { user: "kBingo", total: 36.24, verified: [], completed: [], progressed: [] },
            { user: "Starys2", total: 36.24, verified: [], completed: [], progressed: [] },
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

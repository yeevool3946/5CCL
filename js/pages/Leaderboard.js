import { localize } from '../util.js';
import Spinner from '../components/Spinner.js';

export default {
    components: {
        Spinner,
    },
    data: () => ({
        leaderboard: [
            { user: "th3name", total: 490.93 },
            { user: "tFluffy", total: 365.84 },
            { user: "Goofdude", total: 327.89 },
            { user: "Imunderscore", total: 270.12 },
            { user: "BlissBee", total: 201.33 },
            { user: "FoldedZero", total: 152.41 },
            { user: "ZenosSins", total: 127.08 },
            { user: "Anticroom", total: 109.00 },
            { user: "Yeevool3946", total: 84.24 },
            { user: "Dajvid07", total: 63.90 },
            { user: "Greenn3xus", total: 60.91 },
            { user: "86bottles", total: 47.72 },
            { user: "Moen22", total: 37.80 },
            { user: "kBingo", total: 36.24 },
            { user: "Starys2", total: 36.24 },
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
                        <h3>{{ entry.total.toFixed(2) }} Points</h3>
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

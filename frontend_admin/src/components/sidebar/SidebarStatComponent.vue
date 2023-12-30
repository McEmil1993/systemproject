<template>
    <div class="sidestat non-selectable">
        <div class="sidestat__group">
            <div class="sidestat__group__label">{{ language.sidebar.stat.new_sport_bet }}</div>
            <div class="sidestat__group__value">0</div>
        </div>
        <div class="sidestat__group">
            <div class="sidestat__group__label">{{ language.sidebar.stat.new_classic_bet }}</div>
            <div class="sidestat__group__value">0</div>
        </div>
        <div class="sidestat__group">
            <div class="sidestat__group__label">{{ language.sidebar.stat.new_live_bet }}</div>
            <div class="sidestat__group__value">0</div>
        </div>
        <div class="sidestat__group">
            <div class="sidestat__group__label">{{ language.sidebar.stat.total_deposit }}</div>
            <div class="sidestat__group__value">0</div>
        </div>
        <div class="sidestat__group">
            <div class="sidestat__group__label">{{ language.sidebar.stat.total_withrawal }}</div>
            <div class="sidestat__group__value">0</div>
        </div>

        <div class="sidestat__hidden" v-show="is_all_stat_shown">
            <div class="sidestat__space"></div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.remaining_sports_bet }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.remaining_classics_bet }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.remaining_live_bet }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.remaining_casino_bet }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.remaining_slots_bet }}</div>
                <div class="sidestat__group__value">0</div>
            </div>

            <div class="sidestat__space"></div>
            
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.sports_betting }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.sports_win }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.classic_bet }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.classic_win }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.live_betting }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.real_time_win }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.powerball_betting }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.powerball_winning }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.power_ladder_betting }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.power_ladder_winner }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.kenos_ladder_betting }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.kenos_ladder_winning }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.virtual_soccer_betting }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.virtual_soccer_winning }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.casino_betting }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.slot_game_betting }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.slot_game_win }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.membership_money }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.membership_points }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.distributor_money }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
            <div class="sidestat__group">
                <div class="sidestat__group__label">{{ language.sidebar.stat.distributor_point }}</div>
                <div class="sidestat__group__value">0</div>
            </div>
        </div>

        <div class="sidestat__show">
            <button v-show="!is_all_stat_shown" @click="is_all_stat_shown = !is_all_stat_shown">모든 통계 보기</button>
        </div>
    </div>
</template>

<style lang="scss" scoped src="./SidebarStatComponent.scss"></style>

<script lang="js">
export default
{
    name: 'SidebarStatComponent',
    data: () =>
    ({
        is_all_stat_shown: false,
    })
}
</script>
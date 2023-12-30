<template>
    <div class="member-list non-selectable">
        <g-card title="회원 정보" icon="people">
            <!-- filter and buttons -->
            <div class="q-mb-md">
                Test
            </div>

            <!-- table contaienr -->
            <div>
                <table class="data-table">
                    <thead >
                        <tr>
                            <th colspan="1">전체</th>
                            <th colspan="2">대총판</th>
                            <th colspan="5">가입 정보</th>
                            <th colspan="3">머니/포인트</th>
                            <th colspan="3">정산 정보</th>
                            <th colspan="2">상태 정보</th>
                            <th width="110px" rowspan="2"  colspan="1">관리</th>
                        </tr>
                        <tr>
                            <th class="check-select"><input type="checkbox"></th>
                            <th>전체</th>
                            <th>추천인</th>
                            <th>아이디</th>
                            <th>닉네임</th>
                            <th>계좌번호</th>
                            <th>레벨</th>
                            <th>상태</th>
                            <th>핸드폰</th>
                            <th>머니</th>
                            <th>포인트</th>
                            <th>입금</th>
                            <th>출금</th>
                            <th>정산</th>
                            <th>가입일시</th>
                            <th>최종 로그인 일자</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="check-select"><input type="checkbox"></td>
                            <td><div class="clickable">Default</div> </td>
                            <td>-</td>
                            <td>xxoddsmember</td>
                            <td>xxoddsmember</td>
                            <td>12345678</td>
                            <td>1</td>
                            <td>사용중</td>
                            <td>01042424554</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>2023-08-23 18:57:31	</td>
                            <td></td>
                            <td class="actions">
                                <q-btn-dropdown flat label="관리">
                                    <q-list class="actions__list">
                                        <q-item clickable v-close-popup @click="onItemClick">
                                        <q-item-section>
                                            <q-item-label>로그</q-item-label>
                                        </q-item-section>
                                        </q-item>

                                        <q-item clickable v-close-popup @click="onItemClick">
                                        <q-item-section>
                                            <q-item-label>쪽지</q-item-label>
                                        </q-item-section>
                                        </q-item>

                                        <q-item clickable v-close-popup @click="onItemClick">
                                        <q-item-section>
                                            <q-item-label>20,000 P 지급</q-item-label>
                                        </q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-btn-dropdown>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </g-card>
    </div>
</template>

<style lang="scss" scoped src="./MemberList.scss"></style>

<script>
export default
{
    filters: { },
    data:() =>(
    {
        form: {},
    }),
    mounted() { },
    methods: { },
    computed: { }
}
</script>
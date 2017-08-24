<template>
    <div>
        <section class="row col-sm-12">
            <div class="col-sm-6">
                <h1>YOU</h1>
                <div class="healthbar">
                    <div class="healthbar text-center" style="background-color: green; margin: 0; color: white;">
                        {{ playerHealth }}
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <h1>MONSTER</h1>
                <div class="healthbar">
                    <div class="healthbar text-center" style="background-color: green; margin: 0; color: white;">
                        {{ monsterHealth }}
                    </div>
                </div>
            </div>
        </section>
        <section class="row controls col-sm-offset-1 col-sm-10">
            <button id="start-game">START NEW GAME</button>
        </section>
        <section class="row controls col-sm-offset-1 col-sm-10">
            <button id="attack">ATTACK</button>
            <button id="special-attack">SPECIAL ATTACK</button>
            <button id="heal">HEAL</button>
            <button id="give-up">GIVE UP</button>
        </section>
        <section class="row log">
            <ul>
                <li></li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                playerHealth: 100,
                monsterHealth: 100

            }
        }
    }
</script>
<template>
    <div>
        <h5>Using Tester Example</h5>
        <div class="highlight"><pre><code v-html="code"></code></pre></div>
        <form v-prevent-back="{tester: tester}">
            <div class="form-group">
                <label>Example text</label>
                <input type="text" class="form-control" placeholder="Text">
            </div>
            <div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" v-model="isChange" :value="true"> true
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input class="form-check-input" type="radio" v-model="isChange" :value="false"> false
                    </label>
                </div>
            </div>
            <p>
                Tester method return <code>{{ isChange }}</code>.
                <template v-if="isChange">Chang url, something happens.</template>
                <template v-else>Chang url, nothing happens.</template>
            </p>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                code: "<form v-prevent-back=\"{tester: tester}\"></form>".replace(/\</g, '&lt;').replace(/\>/g, '&gt;'),
                isChange: false,
            };
        },
        methods: {
            tester() {
                return !this.isChange;
            },
        },
    };
</script>

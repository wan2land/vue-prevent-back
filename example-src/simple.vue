<template>
    <div>
        <h5>Simple Example</h5>
        <div class="highlight"><pre><code v-html="code"></code></pre></div>
        <form v-prevent-back>
            <div class="form-group">
                <label>Example email</label>
                <input type="email" class="form-control" placeholder="Email">
            </div>
            <div class="form-group">
                <label>Example password</label>
                <input type="password" class="form-control" placeholder="Password">
            </div>
            <div class="form-group">
                <label>Example text</label>
                <input type="text" class="form-control" placeholder="Text">
            </div>
            <div class="form-group">
                <label>Example select</label>
                <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div class="form-group">
                <label>Example multiple select</label>
                <select multiple class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div class="form-group">
                <label>Example textarea</label>
                <textarea class="form-control" rows="3" placeholder="Textarea"></textarea>
            </div>
          </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                code: "<form v-prevent-back></form>".replace(/\</g, '&lt;').replace(/\>/g, '&gt;'),
            };
        },
    };
</script>

<template>
    <div>
        <a-card title="Compiler & Judger">
          <h3>C ( GCC 5.4 )</h3>
          <pre class="markdown-pre">/usr/bin/gcc -DONLINE_JUDGE -O2 -w -fmax-errors=3 -std=c11 {src_path} -lm -o {exe_path}</pre>

          <h3>C++ ( G++ 5.4 )</h3>
          <pre class="markdown-pre">/usr/bin/g++ -DONLINE_JUDGE -O2 -w -fmax-errors=3 -std=c++14 {src_path} -lm -o {exe_path}</pre>
          <h3>Java ( OpenJDK 1.8 )</h3>
          <pre class="markdown-pre">/usr/bin/javac {src_path} -d {exe_dir} -encoding UTF8</pre>
        </a-card>
        <a-card title="Result Explanation" style="margin-top: 50px">
          <span class="bold">Pending & Judging : </span> You solution will be judged soon, please wait for result.<br/>
          <span class="bold">Compile Error : </span> Failed to compile your source code. Click on the link to see compiler's output.<br/>
          <span class="bold">Accepted : </span> Congratulations. Your solution is correct.<br/>
          <span class="bold">Wrong Answer : </span> Your program's output doesn't match judger's answer.<br/>
          <span class="bold">Runtime Error : </span> Your program terminated abnormally. Possible reasons are: segment fault, divided by zero or exited with code other than 0.<br/>
          <span class="bold">Time Limit Exceeded : </span> The CPU time your program used has exceeded limit.<br/>
          <span class="bold">Memory Limit Exceeded : </span> The memory your program actually used has exceeded limit.<br/>
          <span class="bold">System Error : </span> Oops, something has gone wrong with the judger. Please report this to administrator.
        </a-card>
    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped>
  .markdown-pre {
    padding: 5px 10px;
    white-space: pre-wrap;
    margin-top: 15px;
    margin-bottom: 15px;
    background: #f8f8f9;
    border: 1px dashed #e9eaec;
    font-family: Consolas,Menlo,Courier,monospace;
  }

  .bold {
    font-weight: bold;
  }
</style>
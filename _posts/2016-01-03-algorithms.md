---
layout: post
title: Algorithms
permalink: blog/algorithms
---
** TODO better description to purpose of post (page?) **

- practice algorithm problems by solving them
- improve communication skills (and proof skills) by writing out proof of correctness
- keep memory of algorithms that I've encountered
- useful reference for myself and others
- TODO make sections collapsible

<script type="text/javascript"
    src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

## From CLRS (v3):

### Exercise 2.3-7 (January 3rd, 2016)

*Problem Statement*: Design a function that runs in $$ \mathcal{O}(n \cdot lg(n)) $$ time that has as input an array $$S$$ of distinct integers and integer $$x$$ and returns a boolean indicating whether there exist values $$ a, b \in S $$ such that $$ a + b = x $$.

*Solution and proof of correctness*: 

{% highlight python %}
def solution(S, x):
	sarray = set(sorted(S)) # assuming merge sort
	start, end = 0, len(sarray) - 1
	while start < end:
		currSum = sarray[start] + sarray[end]
		if currSum==x:
			return True
		if currSum>x:
			end -= 1
		else:
			start += 1
	return False
{% endhighlight %}

The input array S is sorted in $$ \Theta(n \cdot lg(n)) $$ time by using, say, merge sort.

The while loop has running time $$ \mathcal{O}(n) $$, since in each iteration the gap between *start* and *end* is closed (by incrementing *start* or decrementing *end*) or a solution is found and the function terminates. To prove that this while-loop method is correct, it suffices to prove that if there exists a solution to the problem then the variables *start* and *end* are not altered if they are bound to one of the solution values. We begin by trivially noting that we're guaranteed to eventually find (i.e. bind *start* or *end* to solution value) a solution value since our while loop is always closing the gap between *start* and *end*. Once one of these values is found, I claim that it won't change (this'll be proved soon) because the only possible change in consecutive iterations of the while-loop will be in the correct direction to find the other solution value. Proof for my claim: because the array is sorted, once one solution value is found the sum of *start* and *end* is an $$ \geq x $$ in the case that the solution value found is *start* and $$ \leq x $$ in the other case. In the first case, this means that the only value that can change in future iterations is *end* until the solution is found; similarly, in the latter case the only value that can change is *start*.

Thus, running time is $$ \Theta(n \cdot lg(n)) + \mathcal{O}(n) = \Theta(n \cdot lg(n)) $$.
var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "sec-section-title",
  "level": "1",
  "url": "sec-section-title.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title          Class Activities      Negate the following statement:   Choose the correct statement:   Mike is not tall, or Karen is not tall    Mike is tall, or Karen is tall    Mike is not tall, and Karen is not tall    Mike is tall, and Karen is tall     Let be the statement Let be the statement First, translate the statement into formal logic. In this statement, is true, and is true. Therefore, the correct answer is  and  , or . Now, negate the statement.  Thus, the answer is Recall what and represent:  From , we get           Buttercup knows whether or not Westley is lying. She promises that if Westley is lying, she will give you a cookie. Buttercup always keeps her promises.  Suppose she does not give you a cookie; what can you conclude?    Westley is lying.    Westley is not lying.    Not enough information to determine.    Suppose she gives you a cookie; what can you conclude?    Westley is lying.    Westley is not lying.    Not enough information to determine.                        Negate the following statement:     Write the statement in formal logic:               Negate the logic:               Rewrite the negated logic in English   Mary does not fail her classes or she cannot graduate    Mary does not fail her classes and she cannot graduate    Mary does not fail her classes and she can graduate    Mary fails her classes and she can graduate       In this statement, if is true, then is false. This is an relationship. Thus, the answer is Now, negate the statement. In order to negate this statement, first translate it into an statement to get rid of the operator.   Thus, the answer is Recall what and represent:  From , we get           Negate the following statement.     Choose the correct statement:                  First, translate the statement into formal logic. In this statement, can be true, xor can be true, or neither can be true. The key here is that while either one can succeed, there is no guarantee of success. The expression is then equal to Now, negate the statement.   The answer is then As an extra exercise, what would this statement translate to in English?          Which of the following are equivalent to ? Select all that apply.            Which of the following are equivalent to the contrapositive of the logical expression ? Select all that apply.            We say a set is finite if there is a nonnegative integer such that the proposition is true. If is a finite set, then denotes the size of , the number of its elements.  A one-to-one correspondence or bijection is a function that can be reversed. Given a function , you can tell that is a bijection if it pairs each input (argument) to a unique output (value).    Let be a finite set. How many functions are there with domain and codomain ?  Try listing all possibilities for . A pattern should emerge. Once you think you see it, try to explain why that is the answer. The lists you made for the small examples should help you see the general case.   Establish a one-to-one correspondence (i.e., a bijection) between the set of functions and the power set .  The inputs of your bijection could be the functions and the outputs the elements of the set .   Define a function by the equation . We will show that is a bijection. Bijections are functions with two properties:   If then (no overlap\/collision; at most one inbound arrow for each codomain element)  For each in the codomain, there is in the domain such that (every codomain element covered ; at least one inbound arrow for each codomain element)   Suppose that and are distinct functions . We need to show that . The first is the subset of on which takes the value . The second is the same set, but for . Since , there is some where . Since the only possible values of these functions are and , it follows that exactly one of and is equal to . Hence is a member of or , but not both. This shows that has the first property of a bijection.  To obtain the second, let us choose an arbitrary element . This is just a subset of . We must show that there exists a function such that . We may of course define and then we see at once that has the desired property. We have now shown that has both properties of a bijection.   Conclude that , and identify the common value of these expressions. (Your answer will depend on .)  Since we have seen a bijection between these sets, they have the same size. We listed all the binary functions on variables; there are of them, so there must be subsets of as well. Observe these combine to say for every finite set .      Let be a nonempty subset of the natural numbers satisfying  ; and  If and , then .  Then .      Show, using induction, that if is a natural number, then divides .   The base case is to show that satisfies the conclusion of the statement. But , so the base case is done.  The inductive case is always phrased as a conditional. If  is a natural number that is in , then  is also in . Let us prove this statement. We will use a direct proof, assuming the hypothesis ( divides ) and deducing the conclusion ( divides ).  Since divides , the definition of divisibility tells us there is such that Multiplying this equation by 4 and adding 3, we obtain Since , we have shown that and the induction step is complete, as is the proof.      Prove that for all natural numbers , divides . Use the induction framework.      In this activity we deal with points in the -dimensional Euclidean space . Such a point is specified by an -tuple of coordinates , where each .  The unit cube in , or unit -cube , is the subset of defined by   Just as a 3-dimensional cube has 2-, 1-, and 0-dimensional faces (usually called faces, edges, and corners, respectively), the -cube has faces of all lower dimensions. We are interested in the corners.  The corners of are defined to be the points of , all of whose coordinates are either 0 or 1. For example, is a corner of .    Prove that has corners using the induction framework.      The Fibonacci numbers are defined by The sequence begins .    Consider a rectangular array of squares, and the problem of determining the number of ways it may be tiled by dominoes. Each domino must cover exactly 2 adjacent squares, without overlaps. So, one way is to use all parallel dominos. If happens to be even, all horizontal dominoes will work as well.  Using the recurrence relation above and the induction framework, show that there are such tilings of the array by dominoes, for all .   Note. For , we say that there is one way to tile an empty array with no dominoes. There would be zero ways to do it with more dominoes, and zero ways to tile a nonempty array with no dominoes.   Consider the ways in which a tiling of a array can arise from a smaller tiling. Remember, you need to show that the number of -tilings is the sum of the number of -tilings and the number of -tilings.   If we look at the last two columns of an -tiling, they have to either be both horizontal dominoes or both vertical. If they are both horizontal, removing both dominoes yields an -tiling. If they are both vertical, removing the last one only yields an -tiling.      What is wrong with the following argument?   (Alleged theorem)   All cars are blue.    It is enough to show that given a nonempty finite set of cars, all of them are the same color. Since mine is blue, the result will follow at once. Let us prove by induction that every nonempty finite set of cars is monochromatic. If the set has just one car, it is surely monochromatic. Now let us suppose, by way of induction, that for some positive integer it has already been shown that every set of cars is monochromatic.  Consider a set of cars. We may form sets , by deleting the th car from to form . Applying the induction hypothesis to each of the sets we see that each of these sets is monochromatic. But then is monochromatic as well, and the proof is complete.       "
},
{
  "id": "objectives-1",
  "level": "2",
  "url": "sec-section-title.html#objectives-1",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "      "
},
{
  "id": "activity-1",
  "level": "2",
  "url": "sec-section-title.html#activity-1",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": "   Negate the following statement:   Choose the correct statement:   Mike is not tall, or Karen is not tall    Mike is tall, or Karen is tall    Mike is not tall, and Karen is not tall    Mike is tall, and Karen is tall     Let be the statement Let be the statement First, translate the statement into formal logic. In this statement, is true, and is true. Therefore, the correct answer is  and  , or . Now, negate the statement.  Thus, the answer is Recall what and represent:  From , we get       "
},
{
  "id": "activity-2",
  "level": "2",
  "url": "sec-section-title.html#activity-2",
  "type": "Activity",
  "number": "1.1.2",
  "title": "",
  "body": "   Buttercup knows whether or not Westley is lying. She promises that if Westley is lying, she will give you a cookie. Buttercup always keeps her promises.  Suppose she does not give you a cookie; what can you conclude?    Westley is lying.    Westley is not lying.    Not enough information to determine.    Suppose she gives you a cookie; what can you conclude?    Westley is lying.    Westley is not lying.    Not enough information to determine.                    "
},
{
  "id": "activity-3",
  "level": "2",
  "url": "sec-section-title.html#activity-3",
  "type": "Activity",
  "number": "1.1.3",
  "title": "",
  "body": "   Negate the following statement:     Write the statement in formal logic:               Negate the logic:               Rewrite the negated logic in English   Mary does not fail her classes or she cannot graduate    Mary does not fail her classes and she cannot graduate    Mary does not fail her classes and she can graduate    Mary fails her classes and she can graduate       In this statement, if is true, then is false. This is an relationship. Thus, the answer is Now, negate the statement. In order to negate this statement, first translate it into an statement to get rid of the operator.   Thus, the answer is Recall what and represent:  From , we get       "
},
{
  "id": "activity-4",
  "level": "2",
  "url": "sec-section-title.html#activity-4",
  "type": "Activity",
  "number": "1.1.4",
  "title": "",
  "body": "   Negate the following statement.     Choose the correct statement:                  First, translate the statement into formal logic. In this statement, can be true, xor can be true, or neither can be true. The key here is that while either one can succeed, there is no guarantee of success. The expression is then equal to Now, negate the statement.   The answer is then As an extra exercise, what would this statement translate to in English?      "
},
{
  "id": "activity-5",
  "level": "2",
  "url": "sec-section-title.html#activity-5",
  "type": "Activity",
  "number": "1.1.5",
  "title": "",
  "body": "  Which of the following are equivalent to ? Select all that apply.         "
},
{
  "id": "activity-6",
  "level": "2",
  "url": "sec-section-title.html#activity-6",
  "type": "Activity",
  "number": "1.1.6",
  "title": "",
  "body": "  Which of the following are equivalent to the contrapositive of the logical expression ? Select all that apply.         "
},
{
  "id": "activity-7",
  "level": "2",
  "url": "sec-section-title.html#activity-7",
  "type": "Activity",
  "number": "1.1.7",
  "title": "",
  "body": "  We say a set is finite if there is a nonnegative integer such that the proposition is true. If is a finite set, then denotes the size of , the number of its elements.  A one-to-one correspondence or bijection is a function that can be reversed. Given a function , you can tell that is a bijection if it pairs each input (argument) to a unique output (value).    Let be a finite set. How many functions are there with domain and codomain ?  Try listing all possibilities for . A pattern should emerge. Once you think you see it, try to explain why that is the answer. The lists you made for the small examples should help you see the general case.   Establish a one-to-one correspondence (i.e., a bijection) between the set of functions and the power set .  The inputs of your bijection could be the functions and the outputs the elements of the set .   Define a function by the equation . We will show that is a bijection. Bijections are functions with two properties:   If then (no overlap\/collision; at most one inbound arrow for each codomain element)  For each in the codomain, there is in the domain such that (every codomain element covered ; at least one inbound arrow for each codomain element)   Suppose that and are distinct functions . We need to show that . The first is the subset of on which takes the value . The second is the same set, but for . Since , there is some where . Since the only possible values of these functions are and , it follows that exactly one of and is equal to . Hence is a member of or , but not both. This shows that has the first property of a bijection.  To obtain the second, let us choose an arbitrary element . This is just a subset of . We must show that there exists a function such that . We may of course define and then we see at once that has the desired property. We have now shown that has both properties of a bijection.   Conclude that , and identify the common value of these expressions. (Your answer will depend on .)  Since we have seen a bijection between these sets, they have the same size. We listed all the binary functions on variables; there are of them, so there must be subsets of as well. Observe these combine to say for every finite set .   "
},
{
  "id": "thm-induction",
  "level": "2",
  "url": "sec-section-title.html#thm-induction",
  "type": "Theorem",
  "number": "1.1.1",
  "title": "",
  "body": "  Let be a nonempty subset of the natural numbers satisfying  ; and  If and , then .  Then .   "
},
{
  "id": "activity-8",
  "level": "2",
  "url": "sec-section-title.html#activity-8",
  "type": "Activity",
  "number": "1.1.8",
  "title": "",
  "body": "  Show, using induction, that if is a natural number, then divides .   The base case is to show that satisfies the conclusion of the statement. But , so the base case is done.  The inductive case is always phrased as a conditional. If  is a natural number that is in , then  is also in . Let us prove this statement. We will use a direct proof, assuming the hypothesis ( divides ) and deducing the conclusion ( divides ).  Since divides , the definition of divisibility tells us there is such that Multiplying this equation by 4 and adding 3, we obtain Since , we have shown that and the induction step is complete, as is the proof.   "
},
{
  "id": "activity-9",
  "level": "2",
  "url": "sec-section-title.html#activity-9",
  "type": "Activity",
  "number": "1.1.9",
  "title": "",
  "body": "  Prove that for all natural numbers , divides . Use the induction framework.   "
},
{
  "id": "subsec-unit-cube",
  "level": "2",
  "url": "sec-section-title.html#subsec-unit-cube",
  "type": "Activity",
  "number": "1.1.10",
  "title": "",
  "body": "  In this activity we deal with points in the -dimensional Euclidean space . Such a point is specified by an -tuple of coordinates , where each .  The unit cube in , or unit -cube , is the subset of defined by   Just as a 3-dimensional cube has 2-, 1-, and 0-dimensional faces (usually called faces, edges, and corners, respectively), the -cube has faces of all lower dimensions. We are interested in the corners.  The corners of are defined to be the points of , all of whose coordinates are either 0 or 1. For example, is a corner of .    Prove that has corners using the induction framework.   "
},
{
  "id": "activity-11",
  "level": "2",
  "url": "sec-section-title.html#activity-11",
  "type": "Activity",
  "number": "1.1.11",
  "title": "",
  "body": "  The Fibonacci numbers are defined by The sequence begins .    Consider a rectangular array of squares, and the problem of determining the number of ways it may be tiled by dominoes. Each domino must cover exactly 2 adjacent squares, without overlaps. So, one way is to use all parallel dominos. If happens to be even, all horizontal dominoes will work as well.  Using the recurrence relation above and the induction framework, show that there are such tilings of the array by dominoes, for all .   Note. For , we say that there is one way to tile an empty array with no dominoes. There would be zero ways to do it with more dominoes, and zero ways to tile a nonempty array with no dominoes.   Consider the ways in which a tiling of a array can arise from a smaller tiling. Remember, you need to show that the number of -tilings is the sum of the number of -tilings and the number of -tilings.   If we look at the last two columns of an -tiling, they have to either be both horizontal dominoes or both vertical. If they are both horizontal, removing both dominoes yields an -tiling. If they are both vertical, removing the last one only yields an -tiling.   "
},
{
  "id": "activity-12",
  "level": "2",
  "url": "sec-section-title.html#activity-12",
  "type": "Activity",
  "number": "1.1.12",
  "title": "",
  "body": "  What is wrong with the following argument?   (Alleged theorem)   All cars are blue.    It is enough to show that given a nonempty finite set of cars, all of them are the same color. Since mine is blue, the result will follow at once. Let us prove by induction that every nonempty finite set of cars is monochromatic. If the set has just one car, it is surely monochromatic. Now let us suppose, by way of induction, that for some positive integer it has already been shown that every set of cars is monochromatic.  Consider a set of cars. We may form sets , by deleting the th car from to form . Applying the induction hypothesis to each of the sets we see that each of these sets is monochromatic. But then is monochromatic as well, and the proof is complete.     "
},
{
  "id": "DFA",
  "level": "1",
  "url": "DFA.html",
  "type": "Section",
  "number": "2.1",
  "title": "Deterministic finite automata",
  "body": " Deterministic finite automata          Class Activities    Give diagrams or tables for DFAs accepting the following languages over the alphabet . Make sure your answers include at least one table and one diagram.   The set of all strings ending in 00  The set of all strings with three consecutive 0s (not necessarily at the end)  The set of all strings with 011 as a substring.     In the reading, you have seen how a DFA is like a very simple computer, modeled by walks on a directed graph. Each move in the walk is determined by the transition function of the DFA as we consume the characters in the input string one by one.    (This example is due to HMU.) Consider the marble-rolling toy pictured below. A marble enters at either or . The path taken by the marble is determined by three levers. Lever 1 is immediately beneath A. If it points left, the marble rolls left and exits through output C. If Lever 1 points right, the marble rolls right and lands on Lever 2 (between A and B). If Lever 2 points left, the marble rolls left and exits through output C. If Lever 2 points rights, the marble rolls right and exits through output D. Finally, Lever 3 is beneath input B. If it points left, we go to Lever 2; otherwise, to output D.  Let us say that a word is accepted if, when we begin in the pictured starting configuration, rolling a marble for each symbol, the final marble exits at .   A marble-rolling toy with two input chutes labeled A and B, and two output chutes labeled C and D. The path taken by the marble is determined by three levers. Lever 1 is immediately beneath A. If it points left, the marble rolls left and exits through output C. If Lever 1 points right, the marble rolls right and lands on Lever 2 (between A and B). If Lever 2 points left, the marble rolls left and exits through output C. If Lever 2 points rights, the marble rolls right and exits through output D. Finally, Lever 3 is beneath input B. If it points left, we go to Lever 2; otherwise, to output D.     Does the toy accept ?  Does the toy accept ?  Does the toy accept ?  Does the toy accept ?  Does the toy accept ?  Does the toy accept ?   Label the words on accepted by the marble-rolling toy, assuming that a word is accepted if the last marble exits at D.   (empty word)                                  Can you describe the language accepted by the transducer?       Recall that if is an automaton, we defined the extended transition function inductively for a word (where ) by However, we think informally about as describing what happens along a path with a certain string of labels. So it should not matter how we break the input string in the definition of . That is, we should be able to use any factorization , not just one with . Use induction on to prove that .      Show that for any state , string , and input symbol , .    Use the result of .      Give DFAs accepting the following languages over the alphabet :   The set of all strings such that each block of 5 consecutive symbols contains at least two 0s  The set of all string whose tenth symbol from the right is a 1  The set of strings that either begin or end (or both) with 01  The set of strings such that the number of 0s is divisible by 5 and the number of 1s is divisible by 3       Give DFAs accepting the following languages over the alphabet :   The set of all strings beginning with a 1 such that, when is interpreted as a binary integer, it is a multiple of 5. For example, strings 101, 1010, and 1111 are in the language, while 0, 100, and 111 are not.  The set of all such strings that, when interpreted in reverse as binary integers, are multiples of 5. Examples of strings in the language are 0, 10011, 1001100, and 0101. Observe there is no restriction on the leading digit in this part.       Let be a DFA and a particular state of , such that for all . Show by induction on that for all input words .      Let be a DFA and a particular state of , such that for all .    Show by induction on that for all , , where is the string consisting of  s.    Show that either or .      We use the exponential notation for concatenation of words as well as individual input symbols from .    Let be a DFA, and suppose that for all we have .    Show that for all we have .    Show that if is a nonempty string in , then for all , then , the -fold concatenation of , is also in .        Consider the DFA with the following transition table:      0  1              Informally describe the language accepted by this DFA, and prove by induction on the length of the input that your description is correct.    When setting up the inductive hypothesis, it is wise to make a statement about what inputs get you to each state, not just what inputs get you to the accepting state.     "
},
{
  "id": "objectives-2",
  "level": "2",
  "url": "DFA.html#objectives-2",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "      "
},
{
  "id": "activity-13",
  "level": "2",
  "url": "DFA.html#activity-13",
  "type": "Activity",
  "number": "2.1.1",
  "title": "",
  "body": "  Give diagrams or tables for DFAs accepting the following languages over the alphabet . Make sure your answers include at least one table and one diagram.   The set of all strings ending in 00  The set of all strings with three consecutive 0s (not necessarily at the end)  The set of all strings with 011 as a substring.    "
},
{
  "id": "activity-14",
  "level": "2",
  "url": "DFA.html#activity-14",
  "type": "Activity",
  "number": "2.1.2",
  "title": "",
  "body": "  (This example is due to HMU.) Consider the marble-rolling toy pictured below. A marble enters at either or . The path taken by the marble is determined by three levers. Lever 1 is immediately beneath A. If it points left, the marble rolls left and exits through output C. If Lever 1 points right, the marble rolls right and lands on Lever 2 (between A and B). If Lever 2 points left, the marble rolls left and exits through output C. If Lever 2 points rights, the marble rolls right and exits through output D. Finally, Lever 3 is beneath input B. If it points left, we go to Lever 2; otherwise, to output D.  Let us say that a word is accepted if, when we begin in the pictured starting configuration, rolling a marble for each symbol, the final marble exits at .   A marble-rolling toy with two input chutes labeled A and B, and two output chutes labeled C and D. The path taken by the marble is determined by three levers. Lever 1 is immediately beneath A. If it points left, the marble rolls left and exits through output C. If Lever 1 points right, the marble rolls right and lands on Lever 2 (between A and B). If Lever 2 points left, the marble rolls left and exits through output C. If Lever 2 points rights, the marble rolls right and exits through output D. Finally, Lever 3 is beneath input B. If it points left, we go to Lever 2; otherwise, to output D.     Does the toy accept ?  Does the toy accept ?  Does the toy accept ?  Does the toy accept ?  Does the toy accept ?  Does the toy accept ?   Label the words on accepted by the marble-rolling toy, assuming that a word is accepted if the last marble exits at D.   (empty word)                                  Can you describe the language accepted by the transducer?    "
},
{
  "id": "act-extended-trans-induction",
  "level": "2",
  "url": "DFA.html#act-extended-trans-induction",
  "type": "Activity",
  "number": "2.1.3",
  "title": "",
  "body": "  Recall that if is an automaton, we defined the extended transition function inductively for a word (where ) by However, we think informally about as describing what happens along a path with a certain string of labels. So it should not matter how we break the input string in the definition of . That is, we should be able to use any factorization , not just one with . Use induction on to prove that .   "
},
{
  "id": "activity-16",
  "level": "2",
  "url": "DFA.html#activity-16",
  "type": "Activity",
  "number": "2.1.4",
  "title": "",
  "body": "  Show that for any state , string , and input symbol , .    Use the result of .   "
},
{
  "id": "activity-17",
  "level": "2",
  "url": "DFA.html#activity-17",
  "type": "Activity",
  "number": "2.1.5",
  "title": "",
  "body": "  Give DFAs accepting the following languages over the alphabet :   The set of all strings such that each block of 5 consecutive symbols contains at least two 0s  The set of all string whose tenth symbol from the right is a 1  The set of strings that either begin or end (or both) with 01  The set of strings such that the number of 0s is divisible by 5 and the number of 1s is divisible by 3    "
},
{
  "id": "activity-18",
  "level": "2",
  "url": "DFA.html#activity-18",
  "type": "Activity",
  "number": "2.1.6",
  "title": "",
  "body": "  Give DFAs accepting the following languages over the alphabet :   The set of all strings beginning with a 1 such that, when is interpreted as a binary integer, it is a multiple of 5. For example, strings 101, 1010, and 1111 are in the language, while 0, 100, and 111 are not.  The set of all such strings that, when interpreted in reverse as binary integers, are multiples of 5. Examples of strings in the language are 0, 10011, 1001100, and 0101. Observe there is no restriction on the leading digit in this part.    "
},
{
  "id": "activity-19",
  "level": "2",
  "url": "DFA.html#activity-19",
  "type": "Activity",
  "number": "2.1.7",
  "title": "",
  "body": "  Let be a DFA and a particular state of , such that for all . Show by induction on that for all input words .   "
},
{
  "id": "activity-20",
  "level": "2",
  "url": "DFA.html#activity-20",
  "type": "Activity",
  "number": "2.1.8",
  "title": "",
  "body": "  Let be a DFA and a particular state of , such that for all .    Show by induction on that for all , , where is the string consisting of  s.    Show that either or .     "
},
{
  "id": "activity-21",
  "level": "2",
  "url": "DFA.html#activity-21",
  "type": "Activity",
  "number": "2.1.9",
  "title": "",
  "body": "  Let be a DFA, and suppose that for all we have .    Show that for all we have .    Show that if is a nonempty string in , then for all , then , the -fold concatenation of , is also in .     "
},
{
  "id": "activity-22",
  "level": "2",
  "url": "DFA.html#activity-22",
  "type": "Activity",
  "number": "2.1.10",
  "title": "",
  "body": "  Consider the DFA with the following transition table:      0  1              Informally describe the language accepted by this DFA, and prove by induction on the length of the input that your description is correct.    When setting up the inductive hypothesis, it is wise to make a statement about what inputs get you to each state, not just what inputs get you to the accepting state.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

# The Perron-Frobenius theorem for homogeneous mappings

## Brief history: Birkhoff (1950): Hilbert metric, Nussbaum: homogeneous mappings, ...: strict contractivity.

## Hilbert projective distance and the Birkhoff-Hopf theorem
A key observation for the development of the nonlinear Perron-Frobenius theory was made by Birkhoff, when he noticed that nonnegative matrices are non-expansive with respect to the Hilbert metric induced by the cone $C_+$.

The Hilbert (projective) metric $d_H\colon C_+\times C_+\to [0,\infty]$ is defined by $d_H(0,0)=0$, $d(x,y)=\infty$ if $x\not\sim y$, and

\[d_H(x,y) = \ln\Big(\max_{i,j \in \mathcal I} \frac{x_i}{y_i}\frac{y_j}{x_j}\Big) \quad \text{ where }\quad \mathcal I =\{i\colon x_i>0\},\]

for all $x,y\in C_+\setminus \{0\}$ such that $x\sim y$.

Technically, $d_H$ is not a metric but a pseudometric since $d(x,y)=0$ may not imply $x=y$. However, it is a complete metric on the set of unit vectors contained in the same part of $C_+$.

<section markdown="block" class="theorem">
**Lemma.** Let $\|\cdot\|$ be a norm on $\RR^n$ and $B=\{x\in \RR^n \colon \|x\|=1\}$.

- For every $x,y\in C_+$ it holds $d_H(x,y)=0$ if and only if there exists $\lambda >0$ such that $x= \lambda y$.

- If $P\subset C_+$ is a part of $C_+$, then $x\sim y$ for all $x,y\in P$, and $(P\cap B, d_H)$ is a complete metric space.
</section>

A direct consequence of the first property in the above Lemma is that for any mapping $f\colon C_+\to C_+$ and any $x\in C_+$, there exists $\lambda >0$ such that $f(x)=\lambda x$ if, and only if, $d_H(f(x),x)=0$. This observation suggest that the Hilbert metric is particularly appropriate to study eigenvectors of mappings leaving a cone invariant.

<section markdown="block" class="theorem">
We should put the picture of my talk here.
</section>

If $M$ is any nonnegative matrix in $\RR^{n\times n}$, then for every $x,y\in C_{++}$ it holds 

\begin{equation}\label{eq:nonexpansive}
Mx \preceq M \Big(\max_{i=1,\ldots,n}\frac{x_i}{y_i}\Big) y = \Big(\max_{i=1,\ldots,n}\frac{x_i}{y_i}\Big) My
\end{equation}

and therefore, $d_H(Mx,My)\leq d_H(x,y)$, i.e. $M$ is nonnexpansive with respect to the Hilbert metric. 

The Birkhoff-Hopf theorem refines this observation by offering an explicit formula for the smallest Lipschitz constant of a positive matrix with respect to the Hilbert metric.

<section markdown="block" class="theorem">
**Theorem. (Birkhoff-Hopf)** Let $M\in \RR^{n\times n}$ be a positive matrix and let 

\[\kappa(M)=\inf\big\{\alpha \geq 0 \colon d_H(Mx,My)\leq d_H(x,y), \forall x,y\in C_+, x\sim y\big\},\]

then, it holds 

\[\kappa(M)=\tanh(\tfrac{1}{4}\Delta(M)) \quad \text{with}\quad \Delta(M)=\max_{i,j,k,\ell = 1,\ldots,n} \frac{M_{ij}M_{k\ell}}{M_{i\ell}M_{kj}}\]

</section>

The Birkhoff-Hopf theorem holds for considerably more general settings such as linear mappings defined on general cones in finite or infinite dimensional spaces. We refer to [NBproof] for a very elegant proof in the general setting. Note that from the formula for $\Delta(M)$ one can see that the smallest Lipschitz constant of $M$ with respect to $d_H$ does not depend on the scale of $M$, i.e. $\Delta(\alpha M)=\Delta(M)$ for all $\alpha >0$. Furthermore, it holds $\Delta(M^\top)=\Delta(M)$. The quantity $\Delta(M)$ is the projective diameter of the set $M(C_+)$ and can be characterized as 

\[ \Delta(M)=\sup\{d_H(Mx,My)\colon x,y \in C_+, x\sim y\}. \]

As discussed in the following remark, the Birkhoff-Hopf theorem can be used to prove results of the Perron-Frobenius theorem for positive matrices. Furthermore, $\kappa(M)$ provides a bound on the linear convergence rate of the sequence converging towards a unique positive eigenvector.

<section markdown="block" class="theorem">
**Remark.** Given a positive matrix $M\in\RR^{n\times n}$, the Perron-Frobenius theorem implies that $M$ has a unique eigenvector $u \in C_{++}$ with $\|u\|=1$, and the sequence $x^{k}=Ax^{k-1}$ satisfies $\lim_{k\to \infty} x^k/\|x^k\|=u$ for every $x^0\in C_{++}$. Thanks to the Birkhoff-Hopf theorem, these results can be obtained as a direct consequence of the Banach fixed point theorem. Indeed, let $B$ be the unit ball in $\RR^n$. By the precedent Lemma we know that $(B\cap C_++,d_H)$ is a complete metric space. Since the hyperbolic tangent takes values in $(0,1)$, the Birkhoff-Hopf theorem implies that $x\mapsto Mx$ is a strict contraction with respect to $d_H$. Finally, note that the scale invariance of the Hilbert metric implies that $x\mapsto Mx$ and $x\mapsto Mx/\|Mx\|$ have the same Lipschitz constants. Hence, by the Banach fixed point theorem, the latter mapping has a unique fixed point, $u$, and its iterates converge to $u$ with rate $\kappa(M)$. However, it should be noted that the linear convergence rate provided by the Birkhoff-Hopf theorem is not as tight as the classical ratio between the second and first eigenvalues of $M$.
</section>

The Hilbert metric can be used to prove a generalization of the Perron-Frobenius theorem to eigenvectors of nonlinear mappings on cones. We discuss the class of such mappings in the next section.

## Homogeneous and order-preserving mappings
To prove that nonnegative matrices are nonexpansive with respect to $d_H$ in Equation $\eqref{eq:nonexpansive}$, we have used two important properties of the nonnegative matrix $M$: First, we have used the fact that for every $x,y\in C_+$ satisfying $x\preceq y$ it holds $Mx\preceq My$ and second, we have used the homogeneity of $M$, i.e. if $x\in \RR^n$ and $\alpha\geq 0$, then $M(\alpha x)= \alpha M(x)$. This motivates the following definition:

<section markdown="block" class="theorem">
**Definition.** Let $K\subset C_+$ be a convex cone, $f\colon K \to C_+$ and $p\in \RR$. 

- $f$ is $\textit{order-preserving}$ if $f(x)\preceq f(y)$ for every $x,y\in K$ satisfying $x\preceq y$.
- $f$ is (positively) $\textit{homogeneous of degree}$ $p$, if for every $x\in K$ and every $\alpha\geq 0$, it holds $f(\alpha\,x)=\alpha\, f(x)$.
</section>
If $f$ is homogeneous of degree $1$, we simply say that $f$ is homogeneous. If $f$ is differentiable on an open set containing $C_+$, then Theorem 1.3.1 of [NB] implies that $f$ is order-preserving if and only if $D f(x)\in C_+$ for all $x\in C_+$. Similarly, the Euler theorem for homogeneous mappings shows that $f$ is homogeneous of degree $p$ if and only if $D f(x) x\, = \, p\, f(x)$ for all $x\in C_+$. If $C_+\subset \RR^1$, then being order-preserving is precisely the same as being increasing. The concept reducing to that of deacreasing functions is termed order-reversing. A mapping $f\colon K\to C_+$ is order-reversing, if $f(y)\preceq f(x)$ for every $x,y\in K$ satisfying $x\preceq y$. We will however mainly discuss order-preserving functions.

<section markdown="block" class="theorem">
**Example.** Consider the mappings $f\colon C_+ \to C_+$, $g\colon C_+ \to C_+$ and $h\colon C_+ \to C_+$, respectively defined as 

- $f$ o.p.
- $g$ order reversing
- $h$ o.p.
</section>
 
A similar argument as in Equation $\eqref{eq:nonexpansive}$ yields the following:

<section markdown="block" class="theorem">
**Lemma.** Let $K\in\{C_+,C_{++}\}$ and let $f\colon K \to C_+$ be homogeneous of degree $p\in \RR$. Suppose that $f$ is either order-preserving or order-reversing, then 

\[ d_H(f(x),f(y))\leq |p|\,d_H(x,y)\qquad \forall x,y\in C_{++}.\]
</section>

The classical Perron-Frobenius theorem is concerned with eigenvalues and eigenvectors of linear mappings and their spectral radius. 
The notions of eigenvalues and eigenvectors for a general mapping $f\colon K\to C_+$ with $K\subset C_+$ can be extended as follows: We say that $x\in C_+$ is an eigenvector of  if there exists $\lambda\geq 0$ such that $f(x)=\lambda x$, $\lambda$ is called an eigenvalue. However, the notion of spectral radius is more delicate to generalize. Indeed, without further assumptions on $f$, the spectrum of $f$ (the set of its eigenvalues) can be empty or unbounded. We consider the following definition:

<section markdown="block" class="theorem">
**Definition.** Let $f\colon C_+ \to C_+$ be order-preserving and homogeneous. The spectral radius of $f$ is defined by

\[\rho(f) = \lim_{k\to \infty} \|f^k\|_{C_+}^{1/k},\]

where $f^k=f\circ \ldots \circ f$ is the $k$-th composition of $f$ with itself and $\|f\|_{C_+}=\max\{\|f(x)\| \colon x\in C_+, \|x\|\leq 1\}$ is the operator norm of $f$ with respect to any norm $\|\cdot \|$ on $\RR^n$.
</section>

The above definition of $\rho(f)$ is usually referred to as the Bonsall spectral radius of $f$. Another definition of spectral radii have been proposed, namely the cone spectral radius of $f$. Nevertheless, it is shown in [specrad] that both definitions are equivalent for homogeneous order-preserving mappings on $C_+$. Let us further observe that for mappings $f\colon C_+\to C_+$ which are homogeneous of degree $p\neq 1$, the concept of eigenvalue is less clear as they depend on the scaling of the eigenvector. However, as discussed in the next section, if $f\colon C_{++}\to C_{++}$ is order-preserving and homogeneous of degree $p<1$, then $f$ always have a unique eigenvector. 

## The Perron-Frobenius theorem and the Collatz-Wielandt formula
Because we do not assume linearity, the assumptions of the Perron-Frobenius for homogeneous mappings are more delicate. To highlight their connection with the linear case, we first recall the results of the Perron-Frobenius theorem.


A first remarkable consequence of the above ovservations is the following version of the Perron-Frobenius theorem concerning mappings which are homogeneous of degree $p$ with $|p|<1$.

<section markdown="block" class="theorem">
**Lemma.** Let $K\in\{C_+,C_{++}\}$ and let $f\colon K \to C_+$ be homogeneous of degree $p\in \RR$. Suppose that $f$ is either order-preserving or order-reversing, then 

\[ d_H(f(x),f(y))\leq |p|\,d_H(x,y)\qquad \forall x,y\in C_{++}.\]
</section>


In the general case of order-preserving, homogeneous mappings the assumptions of the Perron-Frobenius are more technical. In particular,



### Application: Computing the $q\to p$ norm of a nonnegative matrix

### Application: The Sinkhorn method










# Perron-Frobenius theory for linear mappings
## Brief history
In 1907, in [...], Oskar Perron proves that the spectral radius of primitive matrices is an algebraically simple eigenvalue and the corresponding eigenvector can be scaled to have all entries positive.
In 1908, in [...], George Frobenius extends the result by showing that the spectral radius of irreducible matrices is a geometrically simple eigenvalue and the corresponding eigenvector can be scaled to have positive entries.
Furthermore, Perron observes that when the spectral radius is an algebraically simple eigenvalue, one can use the power method introduced by ... in ... to compute a maximal eigenvector, i.e. an eigenvector corresponding with the spectral radius as eigenvalue. 
These results have been then complemented by a broad diversity of results about nonnegative matrix and we refer to [Plemmons] for further readings on the topic. In particular, we will discuss the Collatz-Wielandt ratio, which provides a sup-min and an inf-max characterization of the spectral radius.

## To be killed
We briefly recall here well-known results and concepts of linear algebra which will are useful to understand the subsequent discussion.

Given a matrix $A\in\RR^{n\times n}$, $\lambda\in \RR$ is an eigenvalue of $A$ if there exists $x\in \RR^n$ with $x\neq 0$ and $Ax = \lambda x$. A vector $x$ is called an eigenvector of $A$ if $x\neq 0$ and there exists a corresponding eigenvalue $\lambda\in \RR$ such that $Ax=x$. 

An eigenvalue $\lambda$ of $A$ is algebraically simple if it is a simple root of the polynomial $p(t)=\det(A-tI)$, where $I\in\RR^{n\times n}$ is the identity matrix. An eigenvalue $\lambda$ of $A$ is geometrically simple if $\dim(\ker(A-\lambda I))=1$, i.e. there is a unique up to scale eigenvector corresponding to $\lambda$. Algebraic simplicity implies geometric simplicity but the converse is not true in general.

The spectral radius of $A\in\RR^{n\times n}$ is denoted by $\rho(A)$ and defined as

\[\rho(A)=\max\{|\lambda| \colon \lambda \text{ is an eigenvalue of }A\}\]

For $p\in[1,\infty)$, let $\|x\|_p = \big(\sum_{i=1}^n|x_i|^p\big)^{1/p}$ denote the usual $p$-norm for every $x\in\RR^n$.


## The cone of nonnegative vectors

The Perron-Frobenius theory deals with operators that leave a (¿solid?) normal, convex and pointed cone invariant. The cone of nonnegative vectors is the most common example of such a cone and the one that most often arises in applications. We denote such cone as $C_+ \subseteq \mathbb R^n$ or, when the dimension is clear from the context, simply as $C_+.$ The elements of $C_+$ are vectors whose components are all nonnegative. Whereas the interior $C_{++}$ of $C_+$ is the set of entrywise positive vectors:


- $C_+ = \{x\in \mathbb R^n : x_i\geq 0$ for all $i=1,\dots,n\}=\{x\in \mathbb R^n : x\succeq 0\}$ 
- $C_{++} = \{x\in \mathbb R^n : x_i> 0$ for all $i=1,\dots,n\}=\{x\in \mathbb R^n : x\succ 0\}.$  

The cone $C_+$ induces a partial ordering on $\RR^n$ defined as $x\preceq y$ if $y-x\in C_+$. In particular, as $C_+$ denotes the cone of nonnegative vectors in $\RR^n$, we have that $x\preceq y$ if and only if $x_i \leq y_i$ for all $i=1,\ldots,n$. This partial order induce a equivalence relation $\sim$ on $C_+$ defined as $x\sim y$ if there exists $\alpha,\beta>0$ such that $\alpha x \preceq y \preceq \beta x$. The equivalence classes are called the parts of the cone $C_+$. For example, $C_+\subset\RR^2$ has four parts given $\{0\}, \{(s,0)\colon s>0\}, \{(0,t)\colon t>0\}, C_{++}$.

$C_+$ is convex, pointed and normal as $\alpha x\in C_+$ for all $x\in C_+$ and all scalar coefficients $\alpha \geq 0$,  $C_+\cap -C_+ = \{0\}$ and for every norm $\|\cdot\|$ on $\RR^n$, there exists $\gamma>0$ such that for all pair of vectors $x,y\in C_+$ such that $x\preceq y$ it holds $\|x\|\leq \gamma \|y\|$.[^1] 

[^1]: More generally, it can be shown that every closed cone in a finite dimensional space is normal (see Lemma 1.2.5 [NB]).

This tutorial will focus only on $C_+$, however we point out that all the results we will present can be relatively directly transferred to arbitrary normal, convex and pointed cones.

## Nonnegative, irreducible, primitive and positive matrices
The classical Perron-Frobenius theory is mainly concerned with matrices having nonnegative entries. Based on the pattern of their positive entries, multiple results can be derived concerning the simplicity of their eigenvalues of maximal magnitude and the corresponding eigenvectors. 
To characterize different patterns of positive entries, we recall the definition of primitive and irreducible matrices. We aslo recall characterizations of these definitions as they will be generalized in different ways in the nonlinear setting:

<section markdown="block" class="theorem">
**Definition.** Let $A\in\RR^{n\times n}$ be a matrix.

- $A$ is *nonnegative* if $A_{ij}\geq 0$ for all $i,j=1,\ldots,n$.
- $A$ is *positive* if $A_{ij}>0$ for all $i,j=1,\ldots,n$.
- $A$ is *irreducible* if $A$ is nonnegative and there exists an integer $m$ such that $(I+A)^m$ is positive.
- $A$ is *primitive* if $A$ is nonnegative and there exists an integer $m$ such that $A^m$ is positive.
</section>

A matrix $A$ is positive, if and only if $A^{\top}$ is positive. This observation holds for all four definitions above, i.e. $A$ is nonnegative, irreducible, primitive, respectively, if and only if $A^{\top} has the corresponding property. We illustrate these definitions with an example.

<section markdown="block" class="theorem">
**Example.** Consider the matrices in $\RR^{2\times 2}$ defined as

\begin{equation}\label{def:Example_ABCD} A=\bigg(\begin{matrix}0 & 0 \\ 1 & 1\end{matrix}\bigg), \qquad B=\bigg(\begin{matrix}0 & 1 \\ 1 & 0\end{matrix}\bigg), \qquad C=\bigg(\begin{matrix}0 & 1 \\ 1 & 1\end{matrix}\bigg),\qquad  D=\bigg(\begin{matrix}1 & 2 \\ 1 & 1\end{matrix}\bigg)
\end{equation}

Then: $A,B,C,D$ are nonnegative; $B,C,D$ are irreducible; $C,D$ are primitive; $D$ is positive; $A,B,C$ are not positive; $A,B$ are not primitive; $A$ is not irreducible.
</section>

These defintions can be interpret in the context of graphs. Indeed, one can associated a directed graph $G(A)=(V,E)$ to a nonnegative matrix $A\in \RR^{n\times n}$ as follows: The vertexes are $V=\{1,\ldots,n\}$ and there is an edge from $i$ to $j$, i.e. $(i,j)\in E$, if $A_{ij}>0$. A directed path from $i\in V$ to $j\in V$, is a sequence of $\ell$ edges $(k_1,k_2),(k_2,k_3),\ldots,(k_{\ell},k_{\ell+1})\in E$ such that $k_1=1$ and $k_{\ell+1}= j$. The length of a directed path is the number of edges it traverses, namely $\ell$. The above definitions can now be equivalently formulated as follows:
<section markdown="block" class="theorem">
**Proposition.** Let $A\in\RR^{n\times n}$ be a nonnegative matrix and $G(A)=(V,E)$ be its associated graph.

- $A$ is positive if, and only if, $G(A)$ is complete, i.e. $E=\{(i,j)\mid \forall i,j\in V\}$.
- $A$ is irreducible if, and only if, $G(A)$ is connected, i.e. for all $i,j\in V$ there exists a directed path from $i$ to $j$ (see Theorem ...). 
- $A$ is primitive if, and only if, $G(A)$ is connected and the greatest common divisor of the lengths of all the directed paths starting and ending at the same node equals $1$ (see Theorem 8.5.3 [Horn]).
</section>
Note that the above characterizations highlight the fact that positivivity, irreducibility and primtivity are concepts related to the pattern of the positive entries rather than the magnitude of these entries.

Another way to characterize nonnegative, positive, irreducible and primitive matrices, is to analyze their image on vectors with nonnegative entries.
Note for instance that a matrix $A\in\RR^{n\times n}$ is nonnegative if, and only if, $Ax\in C_+$ for all $x\in C_+$.
<section markdown="block" class="theorem">
**Proposition.** Let $A\in\RR^{n\times n}$ be a nonnegative matrix.

- $A$ is positive if, and only if, $Ax\in C_{++}$ for all $x\in\RR^n_+\setminus\{0\}$.
- $A$ is irreducible if, and only if, there exists an integer $m$ such that $\sum_{k= 0}^m A^{k}x\in C_{++}$ for all $x\in\RR^n_+\setminus\{0\}$ (see Theorem ...).
- $A$ is primitive if, and only if, there exists an integer $m$ such that $A^{m}x\in C_{++}$ for all $x\in C_+\setminus\{0\}$ (see Theorem ...).
</section>

From the above characterization and the matrices $A,B,C,D$ of the Example, one can deduce the following inclusions:
<section markdown="block" class="theorem">
**Lemma.** Let $n>1$ be an integer and consider the following sets of matrices: 

\begin{equation*}
\begin{array}{l c l}
M_{\text{nneg}}=\{A\in\RR^{n\times n}\colon A \text{ is nonnegative}\}, && M_{\text{irr}}=\{A\in\RR^{n\times n}\colon A \text{ is irreducible}\},\\ 
M_{\text{prim}}=\{A\in\RR^{n\times n}\colon A \text{ is primitive}\}, && M_{\text{pos}}=\{A\in\RR^{n\times n}\colon A \text{ is positive}\}.\end{array}
\end{equation*}

Then, it hold $M_{\text{nneg}} \subsetneq M_{\text{irr}} \subsetneq M_{\text{prim}} \subsetneq M_{\text{pos}}$.

</section>

We refer to [...] for an extended discussion on nonnegative, irreducible, primitive and positive matrices.

## The Perron-Frobenius theorem and the Collatz-Wielandt formula

We can now state the celebrated theorem of Perron and Frobenius which provides conditions for the existence of a nonnegative eigenvector, i.e. an eigenvector in $C_+$, the existence and uniqueness of a positive eigenvector, i.e. an eigenvector in $C_{++}$, and the convergence of a sequence towards a unique positive eigenvector. Note that, by unique eigenvector, we mean unique up to scale so that $u$ and $\alpha u$ are considered to be the same eigenvector.

<section markdown="block" class="theorem">
**Theorem (Perron-Frobenius).** Let $A\in\RR^{n\times n}$ be a matrix and $\|\cdot\|$ a norm on $\RR^n$.

- If $A$ is nonnegative, then there exists an eigenvector $u\in C_+$ such that $Au=\rho(A)u$.
- If $A$ is irreducible, then $u$ is the unique up to scale eigenvector of $A$ in $\RR^n_+$. Furthermore $u\in C_{++}$ and $\rho(A)$ is a geometrically simple eigenvalue.
- If $A$ is primitive, then $\rho(A)$ is algebraically simple and for every $x^0\in C_+\setminus\{0\}$, the sequence $(x^k)_{k=0}^{\infty}\subset\RR^n$ defined as $x^k = A x^{k-1}$ for all $k\geq 1$ satisfies

\[\lim_{k\to \infty} \frac{x^k}{\|x^k\|}= \frac{u}{\|u\|}.\]
</section>

The matrices of the previous example shows that the assumptions in the Perron-Frobenius theorem are well calibrated.

<section markdown="block" class="theorem">
**Remark.** Consider the matrices $A,B,C,D$ defined in $\eqref{def:Example_ABCD}$. Then $B,C,D$ have $(1,1)^\top$ as positive eigenvector. The matrix $A$, is an example of nonnegative matrix which is not irreducible, and have no positive eigenvector. The matrix $B$, is an example of irreducible matrix which is not primitive, and for which the sequence $(x^k)_{k=0}^{\infty}$ defined in the Perron-Frobenius theorem do not converge whenever $x^{0}\in\RR^2$ satisfy $x^{0}_1\neq x^{0}_2$.
</section>

We mention one additional result from Collatz and Wielandt which provides a sup-min and an inf-max characterization of the spectral radius. The expressions in the Collatz-Wielandt formula is closely related to the Hilbert metric which is a key ingredient to generalize the Perron-Frobenius theorem. As illustrated by the applications below, the Collatz-Wielandt formula is useful to prove the maximality of an eigenvalue.

<section markdown="block" class="theorem">
**Theorem (Collatz-Wielandt).** Let $A\in\RR^{n\times n}$ be a nonnegative matrix. Then, it holds

\begin{equation}\label{def:cw_up} \rho(A)\quad =\quad \inf_{x\in\RR_{++}^n}\quad \max_{i=1,\ldots,n}\quad \frac{(Ax)_i}{x_i}.
\end{equation}

If additionally, $A$ has an eigenvector $u\in\RR^n_{++}$, then it holds

\begin{equation}\label{def:cw_down}
\rho(A)\quad = \quad\sup_{\substack{x\in\RR_{+}^n\\ x\neq 0}} \quad\min_{\substack{i=1,\ldots,n\\ x_i >0}}\quad \frac{(Ax)_i}{x_i}.
\end{equation}

and both, the infimum and the supremum above, are attained at $u$.
</section>

The Collatz-Wielandt formula is useful to discuss the maximality of eigenvalues, i.e. the egivenvalue of any positive eigenvector equals the spectral radius.

### Application: Stochastic matrices and homogeneous Markov chains on $[n]$

Let $S\in\RR^{n\times n}$ be a stochastic matrix, i.e. $S$ is nonnegative and $S\mathbf{1}=\mathbf{1}$ with $\mathbf{1}=(1,\ldots,1)^\top \in\RR^n$. Let us connsider the set of probability vectors $\Delta_+=\{x\in\RR^n_+\colon x_1+\ldots+x_n=1\}$. Note that $S$ is a nonnegative matrix and $u=\frac{1}{n}\mathbf{1}$ is a positive eigenvector of $S$ corresponding to the eigenvalue $\lambda=1$. We show the existence and uniqueness of a startionary distribution.

First, note that by the Collatz-Wielandt formula,

\[\rho(S) =\inf_{x\in\RR_{++}^n} \max_{i=1,\ldots,n} \frac{(Sx)_i}{x_i} =  \max_{i=1,\ldots,n} \frac{(Su)_i}{u_i} = 1.
\]

As $S^\top$ is a nonnegative matrix, by the Perron-Frobenius theorem, we know that there exists $\pi\in \RR^n_+$ with $\pi_1+\ldots+\pi_n=1$ and $S^\top \pi = \rho(S^\top) \pi$. As $\rho(S^\top)=\rho(S)=1$, we have $S^\top \pi =\pi$, i.e. $\pi$ is a stationary distribution of $S$. This proves the existence. 

If $S$ is irreducible, then $S^T$ is irreducible as well and by the Perron-Frobenius theorem, $\pi$ is the unique stationary distribution of $S$ and $\pi_1,\ldots,\pi_n>0$.

Consider a sequence of random variables $X_0,X_1,\ldots$ with values in $[n]=\{1,\ldots,n\}$. Suppose that

\[\operatorname{Pr}(X_k=j_k\mid X_{k-1}=j_{k-1},\ldots X_0=j_0)=\operatorname{Pr}(X_1=j_k\mid X_0=j_0)= S_{j_kj_0}\]

for all $k=1,2,\ldots$ $X_0,X_1,\ldots$ is a homogeneous Markov chain. Note that if $X_0$ has distribution $x^0\in\Delta_+$, i.e. $\operatorname{Pr}(X_0 = j)=x^0_j$ for all $j\in [n]$, then the distribution $x^k\in\Delta_+$ of $X_k$ satisfies $x^k=(S^\top)^k x^{0}$ for all $k\geq 0$. 
So, if $S$ is primitive, then so is $S^T$. Let $\|\cdot\|_1$ be the $1$-norm, i.e. $\|x\|_1=|x_1|+\ldots+|x_n|$. Note that as $x^k\in \Delta_+$, it holds $\|x^k\|_1=1$ for all $k\geq 0$. Suppose, that $S$ is primitive, then the Perron-Frobenius theorem, with $\|\cdot\|=\|\cdot\|_1$, implies that for every initial distribution $x^0\in \Delta_+$ of $X_0$, it holds $\lim_{k\to \infty}x^k = \pi$.

### Application: Spectral norm of a nonnegative matrix
Let $\|\cdot\|_2$ be the $2$-norm on $\RR^n$, the induced matrix norm $\|\cdot\|_{2,2}$ on $\RR^{n\times n}$ is the spectral norm defined as

\[ \|A\|_{2,2}=\max_{x\in\RR^n}\{\|Ax\|_2 \colon \|x\|_2\leq 1\}=\max_{x\neq 0}\frac{\| Ax \|_2}{\| x \|_2}. 
\]

The function $x\mapsto \|Ax\|_2$ is continuous on the compact set $\{x\colon \|x\|_2\leq 1\}$ and therefore attains a maximum $x^*\in\RR^n, x^*\neq 0$. Now, note that since $A$ is nonnegative, we have $|Ax| \leq A|x|$ where the absolute value and the inequality are understood component-wise. In particular, this implies that

\[ 
\|A\|_{2,2}=\frac{\| Ax^* \|_2}{\| x^* \|_2}=\frac{\| \,|Ax^*|\, \|_2}{\|\,| x^*|\, \|_2}\leq \frac{\| \,|Ax^*|\, \|_2}{\|\,| x^*|\, \|_2}, 
\]

and therefore we may assume without loss of generality that $x^*\in\RR^n_+$. Now, note that if $v\in\RR^n_+$ is a critical point of $x\mapsto\|Ax\|_2/\|x\|_2$, the gradient of the later function vanishes at $x$ and therefore it satisfies

\[A^TAv = \lambda v \qquad \text{with} \qquad \lambda =\Big(\frac{\| Av \|_2}{\| v \|_2}\Big)^2=\|A\|_{2,2}^2, \]

i.e. $v$ is an eigenvector of $A^TA$. The converse of this statement holds true as well, that is, if $v$ is an eigenvector of $A^TA$ with eigenvalue $\lambda$, then $v$ is a critical point of $x\mapsto\|Ax\|_2/\|x\|_2$ and 
$\lambda = (\|Ax\|_2/\|x\|_2)^2$. Therefore, the eigenvalues of $A^TA$ and the square of the critical values of $x\mapsto\|Ax\|_2/\|x\|_2$ are equal. In particular, this implies that $\rho(A^TA) =\|A\|_{2,2}^2$.

Now, $A^TA$ is a nonnegative matrix and if it is irreducible, by the Perron-Frobenius theorem, $A^TA$ has a unique positive eigenvector $u\in \RR^n_{+}$ such that $\|u\|_2=1$. Furthermore, $u\in \RR^n_{++}$ and the corresponding eigenvalue is $\rho(A^TA)$. From the above discussion: $x^*$ is a global maximizer of $x\mapsto\|Ax\|_2/\|x\|_2$ and we may assume $x^*\in\RR^n_+$. Hence, $x^*$ is a nonnegative eigenvector of $A^TA$ and since $u$ is the unique eigenvector of $A^TA$, we have $x^*/\|x^*\|_2 = u$.

Finally, if $A^TA$ is primitive, then for every $x^0\in\RR^n_+\setminus \{0\}$, the sequence $x^k=A^TAx^{k-1}$
satsifies $\lim_{k\to\infty} x^k/\|x^k\| = x^*/\|x^*\|_2$, i.e. this sequence converges to a global maximizer of $x\mapsto\|Ax\|_2/\|x\|_2$.


We conclude by noting that, while the irreducibility of $A$ implies the irreducibility of $A^TA$, the converse is not true in general. Indeed, the matrix $A$ of $\eqref{def:Example_ABCD}$ is not irreducible, but $A^TA$ is a positive matrix and is therefore irreducible and primitive.


# The Perron-Frobenius theorem for multi-homogeneous mappings

## Nonnegative tensors and their norm

## Product of cones and multi-homogeneous mappings

## Eigenvalues and eigenvectors of multi-homogeneous mappings

## The Perron-Frobenius theorem and the Collatz-Wielandt formula

### Application: Computing the norm of a nonnegative tensor

### Application: ...


## The cone of nonnegative vectors

The Perron-Frobenius theory deals with operators that leave a normal, convex and pointed cone invariant. The cone of nonnegative vectors is the most common example of such a cone and the one that most often arises in applications. We denote such cone as $C_+ \subseteq \mathbb R^n$ or, when the dimension is clear from the context, simply as $C_+.$ The elements of $C_+$ are vectors whose components are all nonnegative. Whereas the interior $C_{++}$ of $C_+$ is the set of entrywise positive vectors:


- $C_+ = \{x\in \mathbb R^n : x_i\geq 0$ for all $i=1,\dots,n\}=\{x\in \mathbb R^n : x\succeq 0\}$ 
- $C_{++} = \{x\in \mathbb R^n : x_i> 0$ for all $i=1,\dots,n\}=\{x\in \mathbb R^n : x\succ 0\}.$  

$C_+$ is convex, pointed and normal as $\alpha x\in C_+$ for all $x\in C_+$ and all scalar coefficients $\alpha \geq 0$,  $C_+\cap -C_+ = \{0\}$ and for all pair of vectors $x,y\in C_+$ such that $x\preceq y$ there exists a $\gamma>0$ such that $\|x\|\leq \gamma \|y\|$. Here $\|\cdot\|$ is any norm on $\mathbb R^n$. 

This tutorial will  focus only on $C_+$ however, however we point out that all the results we will present can be  relatively directly transferred to arbitrary normal, convex and pointed cones.  

## Hilbert projective distance 
One of the key tools for the Perron-Frobenius theory for nonlinear mappings is the Hilbert distance. For any two positive vectors $x,y\succ 0$, this is defined as:[^1]

\\[d_H(x,y) = \ln\Big(\max_{i=1,\dots,n}\frac{x_i}{y_i}\max_{i=1,\dots,n}\frac{y_i}{x_i}\Big)\\]

[^1]: This definition is strictly related to the choice of the nonnegative cone $C_+$. For general cones, the definition of $d_H$ changes. However, all its properties do not change. 

$d_H$ is a metric on the space of rays in $C_{++}$, that is it holds[^2]

<center>
$d_H(\alpha x, \beta y) =d_H(x,y)$ for all scalar coefficients $\alpha,\beta >0$
</center>

[^2]: :material-file-document-outline: *Lemmens, Nussbaum, Citation test*

ds

Lorem markdownum fuit peragit eunti, cum illuc heu ferrumque gentis. Curvarique
loca remoraminaque terram iniustaque tempora luctusque vitam; tela iunxit gratia
fontibus ut tempus cupiasque relevasse altis. Mutantur carpere geratis Scorpius.
Visa ego delendaque, victae esse pervenit et arentia gentem.

    if (5 + net) {
        alignment = jumperPpi;
        ppl_server = multiplatform(2, -1) + switchCable;
    }
    var integerCarrier = uml_p_tween;
    metafileCdPram -= scareware.barMultiprocessingIo.box(fiber,
            plugSyn.integrated_add(gif, camera, export_vga_multithreading));
    if (processorSdk) {
        taskCcd = client_clipboard_syntax;
    }

Prope sine coepta: reddi tabo virens expositum amaris saxo [medio
fons](http://www.redeat.io/et) esse Nisi. Dixit **dolorem simulamina** motus.
Gradibus tuta quae addere vero iuvenis candida; ictu Phocaico, tempore addicere
pluma terra?

## Est deus pericula exigere figit

Iani rumpere raptos o columbae non et leonis [ferre qui
quinque](http://www.signaverat.org/oblita.aspx) arva idem *dixit* haec;
advertite candore. Mora invitusque casses,
[totidemque](http://www.relatu-carnibus.io/victae) et erat in nonne novat
iamque: quae? Ab nec fecit et idonea nunc lumine Spartana nunc vertice brevis
pendebant levius contraria aere? Iram orba ferarum dei eburnea; voce
praestantes, me squamas victor contigit pia!

    pitch_ecc.serp_clip = -5 + -1;
    box.tape_digital(subnet_only);
    esports_query_multiprocessing.fontPiconetServices -= document_laptop;

Ipse nomen, certum ego; heros nam, donec et semper parenti formatae
[si](http://dryope.org/et-condidit) iuvenum. Insidias dextera anumque est
habitandae nubes. Quo Latina, quidem: positisque, inter regia puer iurgia, illa
illos **ille** limine flammifera dracones et. Retenta Metione atque iam quoque
Iunone pabula.

Canna ora maxima non penates cautum cruorem quid quid falsi. Ara plus templa,
nymphe innato [parum vestrae](http://www.undae-forma.org/sacerdosdisiecit), tunc
caput instat quo. Tum moras si Euagrus freta ferrove urbs nec etiam ipsis. Nunc
quod aut intrarunt et graves urbes, telluris carmen coget corpus.

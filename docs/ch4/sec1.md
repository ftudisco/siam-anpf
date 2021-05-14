# Optimization with nonlinear Perron eigenvectors




The connection between eigenvalue problems and constrained optimization is relatively standard. For example, the singular value equations $M y = \lambda x$, $M^\top x = \lambda y$ of a matrix $M$  always admit a variational characterization which connects the solutions of the constrained optimization of $f(x,y) = x^\top M y$ to the singular values and vectors of $M$. In particular, the constrained optimization problem 

\begin{equation}\label{eq:matrix-variational-problem}
\left\{
\begin{array}{ll}
\text{max} & f(x,y)  \\[.4em]
\text{subject to}& \|x\|= \|y\|=1
\end{array}
\right. 
\end{equation}

is given by the extreme left and right singular vectors of $M$. Thus, while the optimization problem itself is not convex in general (for a general $M$), we can compute it using ideas from numerical linear algebra, in particular,  numerical eigensolvers. This relatively simple connection has led to powerful numerical optimizers in recent years, see e.g. [@adachi2017solving] [@adachi2019eigenvalue] [@sakaue2016solving]. 


A simple application of Euler's theorem show that an analogous property holds for the more general constrained optimization problem 

\begin{equation}\label{eq:constrained-opt}
\left\{
\begin{array}{ll}
\text{max}_{x\in \RR^n} & f(x^{(1)}, \dots, x^{(m)})\\
\text{subject to}& g_1(x^{(1)})=\dots=g_m(x^{(m)})=1,
\end{array}
\right.
\end{equation}

where $f$ and $g_i$ are multihomogeneous or, more generally, sub-multihomogeneous. However, when $f$ and $g_i$ are not quadratic, this optimization problem can  significantly more challenging than $\eqref{eq:matrix-variational-problem}$. As we will see, even smooth functions $f$ and $g_i$ may lead to NP-hard problems. 
**However**, when $f$ and $g_i$ are nonnegative, we can often solve $\eqref{eq:constrained-opt}$ to an arbitrary accuracy by leveraging and extending the Perron-Frobenius theory for multihomogeneous mappings. 

Before doing this, we discuss an example which shows how the constrained optimization of homogeneous functions pops up in combinatorial optimization and has applications for example in graph clustering. 


## Optimization of combinatorial ratios


Consider a set of integers $V=\{1,\dots, n\}$. A combinatorial ratio is a function $f:2^V\to\RR$ of the form 

\begin{equation}\label{eq:general-ratio}
\varrho(S) = \frac{\alpha(S)}{\beta(S)}
\end{equation}

where both $\alpha$ and $\beta$ are set functions $\alpha,\beta:2^V\to\RR$. The optimization of this type of functions arises in many context. One example of interest to us is graph clustering. The optimization of the graph conductance is a classical and successful strategy for finding a good partition of a graph into two subsets. In this case  $V$ is the vertex set of a graph $G=(V,E)$ with adjacency matrix $A$ and the global minimum of 

$$
\varrho(S) = \frac{A(S,\bar S)}{\min\{\nu(S),\nu(\bar S)\}}
$$

where $\bar S = V\setminus S$ is the complement of $S$ in $V$, $A(S,\bar S) = \sum_{i\in S, j\in \bar S}A_{ij}$ is the overall weight of edges going from $S$ to $\bar S$  and $\nu(S)=\sum_{i\in S}\nu_i$ is the weight of the set $S$, for some weight coefficients $\nu_i$.

<center>
<img style="width:22em;border-style:solid;border:5px;" src="../../img/graph-cut.png" alt="example-graph" />
</center>

Minimizing $\varrho$ is in general a NP-hard problem, however a homogeneous relaxation based on the Lovasz extension of $\alpha$ and $\beta$ allows us to obtain arbitrarily good continuous approximation. This was first observed in [.....matthias....] for $1$-homogeneous functions, but it is not difficult to extend that idea to the case of $p$-homogeneous ones:

<section markdown="block" class="theorem">
**Theorem.** Let $\alpha,\beta:2^V\to\RR$ be such that $\alpha(S),\beta(S)\geq 0$ for all $S\subseteq V$ and $\alpha(V)=\alpha(\emptyset)=\beta(V)=\beta(\emptyset)=0$. For any $p\geq 1$ there exist a constant $C$ independent of $n$ and $p$ and homogeneous functions $f,g:\RR^n\to\RR$ with homogeneity degree $p$ such that, if $\lambda$ is the solution to 

\begin{equation}\label{eq:thm-cheeger}
\lambda = \min \{  f(x) \text{ such that } x\in \RR^n \text{ and } g(x) = 1 \}
\end{equation}

then $\lambda \leq \min_S \varrho(S)\leq C^{p-1} \lambda^{1/p}$. In particular, $\lambda \xrightarrow{p\to 1} \min \varrho$. 
 
</section>

Both $f$ and $g$ in the theorem above are defined in terms of the Lovasz extension of $\alpha$ and $\beta$. For certain combinatorial functions this extension admits an explicit formula. For example, when tailored to the clustering problem $\alpha(S) = A(S,\bar S)$ and $\beta(S) =\min\{\nu(S),\nu(\bar S)\}$, the $p$-homogeneous functions in the theorem are

<center>
$\displaystyle{f(x) = \frac 1 2 \sum_{ij}A_{ij}|x_i-x_j|^p}$  and $\displaystyle{g(x) = \|x-\mathrm{mean}(x)\one\|_p^p}$
</center>
<!-- A_ -->

In particular, $f(x)$ is the energy associated to the so-called $p$-Laplacian on $G$ and in fact, it is not difficult to show that for these two $f$ and $g$, $\lambda$ in the theorem coincides with the smallest nonzero eigenvalue of the graph $p$-Laplacian, defined as

$$
L_p(x) = B\Phi(B^\top x), \qquad \Phi(x) = |x|^{p-1}\mathrm{sign}(x)
$$

with $B$ the incidence matrix of $G$ (see the [network centrality](../../ch2/sec2/#beyond_matrices_and_tensors) section for its definition). In particular, $L_p$ boils down to the graph Laplacian matrix when $p=2$ and we obtain the renowned Cheeger inequality as a corollary of the theorem above. This observation shows that the optimization of the graph conductance can be approached via the solution of so-called nonlinear eigenvalue problems with eigenvector nonlinearities. In fact, using the Euler theorem for (multi)homogeneous functions, we can always connect the constrained optimization problem  $\eqref{eq:constrained-opt}$ with a nonlinear eigenvector problem, as we will discuss next.



## Sub-multihomogeneous mappings

A mapping $F:\RR^n\to\RR^n$ is homogeneous of degree $p$ if $F(\lambda x)=\lambda^p F(x)$ for all $\lambda>0$ and $x\succeq 0$. When $F$ is differentiable, Euler's theorem for homogeneous functions allows us to equivalently characterize this property in terms of the Jacobian of $F$, which we denote by $\partial F:\RR^n\to\RR^{n\times n}$. Precisely, we have 

<section markdown="block" class="theorem">
**Theorem (Euler).**  Let $F:\RR^n\to\RR^n$ be differentiable. Then $F$ is homogeneous of degree $p\neq 0$ if and only if $\partial F(x)x = p F(x)$ for all $x\succ 0$.
</section>

This result can be extended 
As for homogeneous functions, differentiable multihomogeneous mappings enjoy the following Euler's characterization. Let $\partial F(x)$ denote the derivative of $F$ at $x\in \RR^m$, we have:


\bibliography

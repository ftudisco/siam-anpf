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
**Example.** 

- Let $M$ be a nonnegative matrix with at least one positive entry per row. Let $\alpha\in \RR$ and consider the mapping $f_{\alpha}\colon C_{++} \to C_{++}$ defined as 

\begin{equation}\label{def:f_a}
f_{\alpha}(x) = (Mx)^{\alpha}
\end{equation}

where the power $\alpha$ is applied component-wise, i.e. $y^{\alpha}=(y_1^{\alpha},\ldots,y_n^{\alpha})^\top$ for all $y\in C_{++}$. Then, this mapping is homogeneous of degree $\alpha$. Furthermore, $f_{\alpha}$ is order-preserving if $\alpha > 0$, order-reversing if $\alpha <0$ and constant if $\alpha =0$.[^1]

- Let $T\in\RR^{n\times n \times n}$ with $T_{ijk}\geq 0$ for all $i,j,k=1,\ldots,n$ and consider the mapping $f\colon C_+\to C_+$ defined as

\begin{equation}\label{def:f_T3}
f(x)_i = \sum_{j,k} T_{ijk}x_jx_k \qquad \forall i = 1,\ldots,n.
\end{equation}

Then, this mapping is homogeneous of degree $2$ and order-preserving.

- Let $M$ be a nonnegative matrix and $b\in C_+$. Define $f\colon C_+ \to C_+$ by $f(x)=Mx+b$. Then, $f$ is order-preserving but not homogeneous. Nevertheless, $f$ satisfies $\alpha f(x)\leq f(\alpha x)$ for all $\alpha \in (0,1)$ and $x\in C_+$. We refer to [...] for further readings on subhomogeneous mappings.

- Let $C_+\subset \RR^2$ and $f\colon C_+\to C_+$ defined as

\begin{equation}\label{def:f_disco}
f(x_1,x_2)=\begin{cases} (x_2 , 0 )^\top & \text{if }x_2>0, x_1=0\\ (x_1 , x_1)^\top & \text{if }x_2=0, x_1>0\\ (0,x_2)^\top & \text{otherwise} \end{cases}
\end{equation}

Then, $f$ is homogeneous and order-preserving.

- Let $C_+ \subset \R^3$ and $f\colon C_+\to C_+$ defined as
	
\begin{equation}\label{def:f_max}
f(x_1,x_2,x_3)= \big(\max\{x_1,x_2,x_3\}, \max\{\tfrac{x_1}{2},x_2\}, \max\{\tfrac{x_2}{2},x_3\}\big)^\top
\end{equation} 

Then $f$ is continuous, homogeneous and order-preserving. 

</section>

[^1]: We use the convention $t^{0}=1$ for all $t>0$.

A similar argument as in Equation $\eqref{eq:nonexpansive}$ yields the following:

<section markdown="block" class="theorem">
**Lemma.** Let $K\in\{C_+,C_{++}\}$ and let $f\colon K \to C_+$ be homogeneous of degree $p\in \RR$. Suppose that $f$ is either order-preserving or order-reversing, then 

\[ d_H(f(x),f(y))\leq |p|\,d_H(x,y)\qquad \forall x,y\in C_{++}.\]
</section>

The classical Perron-Frobenius theorem is concerned with eigenvalues and eigenvectors of linear mappings and their spectral radius. 
The notions of eigenvalues and eigenvectors for a general mapping $f\colon K\to C_+$ with $K\subset C_+$ can be extended as follows: We say that $x\in C_+$ is an eigenvector of  if there exists $\lambda\geq 0$ such that $f(x)=\lambda x$, $\lambda$ is called an eigenvalue. However, the notion of spectral radius is more delicate to generalize. Indeed, without further assumptions on $f$, the spectrum of $f$ (the set of its eigenvalues) can be empty or unbounded. We consider the following definition:

<section markdown="block" class="theorem">
**Definition.** Let $f\colon C_+ \to C_+$ be continuous, order-preserving and homogeneous. The spectral radius of $f$ is defined by

\[\rho(f) = \lim_{k\to \infty} \|f^k\|_{C_+}^{1/k},\]

where $f^k=f\circ \cdots \circ f$ is the $k$-th composition of $f$ with itself and $\|f\|_{C_+}=\max\{\|f(x)\| \colon x\in C_+, \|x\|\leq 1\}$ is the induced norm of $f$ with respect to any norm $\|\cdot \|$ on $\RR^n$.
</section>

The above definition of $\rho(f)$ is usually referred to as the Bonsall spectral radius of $f$. Another definition of spectral radii have been proposed, namely the cone spectral radius of $f$. Nevertheless, it is shown in [specrad] that both definitions are equivalent for continuous homogeneous order-preserving mappings on $C_+$. Let us further observe that for mappings $f\colon C_+\to C_+$ which are homogeneous of degree $p\neq 1$, the concept of eigenvalue is less clear as they depend on the scaling of the eigenvector. However, as discussed in the next section, if $f\colon C_{++}\to C_{++}$ is order-preserving and homogeneous of degree $p<1$, then $f$ always have a unique eigenvector.


## The Perron-Frobenius theorem and the Collatz-Wielandt formula
We split the statement of the Perron-Frobenius theorem for homogeneous mappings in several parts in order to facilitate the discussion of the assumptions.

First, we state the weak form of the Perron-Frobenius theorem which guarantees that the spectral radius is an egeivalue. We refer to Corollary 5.4.2 in [NB] for a proof. 
<section markdown="block" class="theorem">
**Theorem 1.** Let $f\colon C_{+}\to C_{+}$ be continuous, homogeneous and order-preserving. 

- There exists $u\in C_{+}, u \neq 0$ such that $f(u) = \rho(f) u$. ([NB] Corollary 5.4.2)
</section>

Note that if $f\colon \RR^n\to \RR^n$ is linear and saisfies $f(C_+)\subset C_+$, then $f$ is order-preserving and the matrix associated to $f$ has nononegative entries (in the canonical basis). Hence, if $f$ is linear, the assumption above matches the assumptiong of classical Perron-Frobenius theorem.

There are two ways to prove the existence of a positive eigenvector of $f$. Each follows from a different generalization of the notion of irreducibility (see Section 1). The first is the following:

<section markdown="block" class="theorem">
**Theorem 2.** Let $f\colon C_{+}\to C_{+}$ be homogeneous and order-preserving. 

- If for all $x\in C_+$, there exists $N>0$ such that $\sum_{k=0}^N f^k(x)\in C_{++}$, then every eigenvector of $f$ lies in $C_{++}$.
</section>

The above result has the advantage to guarantee that there is no eigenvectors of $f$ on the boundary of the cone $C_+$. On the other hand, in most applications involving tensors, it turns out to be more restrictive than the assumption of the following theorem which considers a generalization of the graph associated to a matrix. We recall the following definition from [GaubertGunnar]. 

<section markdown="block" class="theorem">
**Definition.** Given $f\colon C_{+}\to C_{+}$ homogeneous and order-preserving, consider the graph $G(f)=(V,E)$ with $V=\{1,\ldots,n\}$ and $(i,j)\in E$ if 

\[\lim_{t\to \infty} f(\mathbf{1} + t e_j)_i =\infty,\] 

where $\mathbf{1}$ is the vector of all ones and $e_i$ is the $i$-th vector of the canonical basis. 
</section>
Note that if $f(x)=Mx$ for some nonnegative matrix $M$, then $G(f)$ coincide with the directed graph induced by the positive entries of $M$ (see Section 1). 

<section markdown="block" class="theorem">
**Theorem 3.** Let $f\colon C_{++}\to C_{++}$ be homogeneous and order-preserving. 

- If $G(f)$ is strongly connected then there exists $u\in C_{++}$ and $\lambda >0$ such that $f(u)=\lambda u$.
</section>

This result is a particular case of Theorem 1 in [CaubertGunar]. Example 5.4 of [ourPF] provides a mapping which satisfies the assumptions of Theorem 3 but not those of Theorem 2. For nonnegative tensors, the assumption of Theorem 1 implies that of Theorem 2, but not vice-versa (see [pqFriedland], Lemma ...).

Regarding uniqueness, another generalization of irreducibility is needed:
<section markdown="block" class="theorem">
**Theorem 4.** Let $f\colon C_{++}\to C_{++}$ be homogeneous and order-preserving. Suppose that there exists $u\in C_{++}$ and $\lambda >0$ such that $f(u)=\lambda u$ and $f$ is differentiable at $u$. If $Df(u)\in\RR^{n\times n}$ is an irreducible matrix, then $u$ is the unique positive eigenvector of $f$.
</section>

The assumptions for the convergence of the iterates is similar to the above Theorem:
Regarding uniqueness, another generalization of irreducibility is needed:
<section markdown="block" class="theorem">
**Theorem 4.** Let $f\colon C_{++}\to C_{++}$ be homogeneous and order-preserving. Suppose that there exists $u\in C_{++}$ and $\lambda >0$ such that $f(u)=\lambda u$ and $f$ is differentiable at $u$. If $Df(u)\in\RR^{n\times n}$ is a primitive matrix, then for every $x^0\in C_{++}$, the sequence $(x^k)_{k=0}^{\infty}\subset C_{+}$ defined as $x^k = f(x^{k-1})$ for all $k\geq 1$ satisfies

\[\lim_{k\to \infty} \frac{x^k}{\|x^k\|}= \frac{u}{\|u\|}.\]
 
</section>

Finally, to guarantee the maximality of eigenvalues, one can use the following generalization of the Collatz-Wieland formula:

<section markdown="block" class="theorem">
**Theorem.** Let $f\colon C_{+}\to C_{+}$ be order-preserving and homogeneous of degree $p$ with $0< p<1$. Suppose that $f(C_{++})\subset C_{++}$ and let $\|\cdot\|$ be a monotonic norm on $\RR^n$, i.e. $x,y\in C_+$ and $x\preceq y$ imply $\|x\|\leq \|y\|$. Then, there exists $u\in C_{++}$ and $\lambda>0$ such that $f(u)=\lambda u$, and

\begin{align*}
\rho(A)\quad &= \quad\sup_{x\in C_{+}^n\cap B} \quad\min_{\substack{i=1,\ldots,n\\ x_i >0}}\quad \frac{f(x)_i}{x_i}\\
& =\quad \inf_{x\in C_{++}^n\cap B}\quad \max_{i=1,\ldots,n}\quad \frac{f(x)_i}{x_i},\notag
\end{align*}

where $B=\{x\colon \|x\|=1\}$ is the unit ball in $\RR^n$.
</section>

Finally, we discuss the case of contractive mappings. The follwoing result is proved by Bushell in [Bus57] and can be obtained by combining both Lemmas of this section together with the Banach fixed point theorem. 

<section markdown="block" class="theorem">
**Theorem.** Let $f\colon C_{++}\to C_{++}$ be homogeneous of degree $p$ with $|p|<1$. Suppose that $f$ is either order-preserving or order-reversing. Let $\|\cdot\|$ be a norm on $\RR^n$.

- There exists a unique eigenvector $u\in C_{++}$ of $f$. 
- For every $x^0\in C_{++}$, the sequence $(x^k)_{k=0}^{\infty}\subset\RR^n$ defined as $x^k = f(x^{k-1})$ for all $k\geq 1$ satisfies

\[\lim_{k\to \infty} \frac{x^k}{\|x^k\|}= \frac{u}{\|u\|}.\]

Furthermore, for every $k\geq 1$, it holds

\begin{align*}
	\mu(x^k, u) \leq \frac{|p|^k}{1-|p|}\mu(x^1,x^0).
\end{align*}
</section>

It is worth remarking the simplicity in the assumptions of the above theorem. For instance, when $\alpha\in (-1,1)$, the mapping $f_{\alpha}$ of Equation $\eqref{def:f_a}$ is guaranteed to have a unique positive eigenvector with the only assumption on $M$ that it needs to have at least one positive entry per row. This contrast strongly with the assumptions of the Perron-Frobenius theorem for nonnegative matrices which requires irreducibility. However, the above theorem does not improve the Perron-Frobenius theorem as the linear case would require $\alpha = 1$.

Another difference between the above theorem and the Perron-Frobenius theorem is that the former adresses mappings defined on $C_{++}$ while the later adresses mappings defined on $C_+$. Thus, the Perron-Frobenius theorem is more informative in the sense that its uniqueness result imply that there is no nonnegative eigenvector. This may not be the case in the nonlinear case (take for example $M$ to be identity matrix in the definition of $f_{\alpha}$). Furthermore, there is no maximality statement in the above theorem. As discussed above, eigenvalues of mappings which are homogeneous of degree $p$ with $p\neq 1$ is delicate as the eigenvalue changes with respect to the scaling of the corresponding eigenvector. Therefore, in order to compare eigenvalues of such mappings, we fix the scale of the corresponding eigenvectors. With this observation, the following variant of the Collatz-Wielandt formula for order-preserving contractive mappings implies that if $u$ is a positive eigenvector and $v$ is a nonnegative eigenvector such that $\|u\|=\|v\|$ and $\|\cdot\|$ is a monotonic norm, then the eigenvalue corresponding to $u$ is at least as large as that corresponding to $v$.

<section markdown="block" class="theorem">
**Theorem.** Let $f\colon C_{+}\to C_{+}$ be order-preserving and homogeneous of degree $p$ with $0< p<1$. Suppose that $f(C_{++})\subset C_{++}$ and let $\|\cdot\|$ be a monotonic norm on $\RR^n$, i.e. $x,y\in C_+$ and $x\preceq y$ imply $\|x\|\leq \|y\|$. Then, there exists $u\in C_{++}$ and $\lambda>0$ such that $f(u)=\lambda u$, and

\begin{align}\label{def:cw_down}
\rho(A)\quad &= \quad\sup_{x\in C_{+}^n\cap B} \quad\min_{\substack{i=1,\ldots,n\\ x_i >0}}\quad \frac{f(x)_i}{x_i}\\
& =\quad \inf_{x\in C_{++}^n\cap B}\quad \max_{i=1,\ldots,n}\quad \frac{f(x)_i}{x_i},\notag
\end{align}

where $B=\{x\colon \|x\|=1\}$ is the unit ball in $\RR^n$.
</section>

### Application: Computing the $q\to p$ norm of a nonnegative matrix

### Application: The Sinkhorn method







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
.... $f$ o.p.
.... $g$ order reversing
.... $h$ o.p.
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
Because we do not assume linearity, the assumptions of the Perron-Frobenius for homogeneous mappings are more delicate.


A first remarkable consequence of the above ovservations is the following version of the Perron-Frobenius theorem concerning mappings which are homogeneous of degree $p$ with $|p|<1$.

<section markdown="block" class="theorem">
**Lemma.** Let $K\in\{C_+,C_{++}\}$ and let $f\colon K \to C_+$ be homogeneous of degree $p\in \RR$. Suppose that $f$ is either order-preserving or order-reversing, then 

\[ d_H(f(x),f(y))\leq |p|\,d_H(x,y)\qquad \forall x,y\in C_{++}.\]
</section>


In the general case of order-preserving, homogeneous mappings the assumptions of the Perron-Frobenius are more technical. In particular,



### Application: Computing the $q\to p$ norm of a nonnegative matrix

### Application: The Sinkhorn method







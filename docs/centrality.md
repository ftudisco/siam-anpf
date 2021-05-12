# Network centrality  

Ranking the nodes of a network according to suitable "centrality measures" is a recurring and fundamental question in network science and data mining.  Among the various  network centrality models,  the class of **eigenvector centrality** is one of the most widely used and effective. This family of models  dates back to the 19th Century when it was proposed as a mean to rank professional chess players by Edmund Landau[@schaf2019landau] and was then  popularized in the network science community starting from the late '80s with Bonacich[@bonacich1987eig], PageRank[@page1999pagerank] and HITS[@K99] models. 

This class of scores assigns importances to the nodes of a graph, based on the leading eigenvector $x$ (or the leading singular vectors $x,y$) of suitable network matrices and strongly rely on the matrix Perron-Frobenius theorem. 
One of the keys of the success of eigenvector  centralities is that they naturally incorporate **mutual reinforcement**: important objects are those that interact with many other important objects. To clarify this idea, we review below two widely used centrality models (we consider the case of binary "unweighted" graphs for simplicity, but everything transfer with minor adjustments  to the weighted setting.)

**Bonacich centrality** Let $G=(V,E)$ be a graph with adjacency matrix 

$$
A_{ij} = \begin{cases}1 & j\to i \\
0 & \text{otherwise}
\end{cases} \quad , 
$$

where $j\to i$ means that there is an edge in $G$ going from $j$ to $i$. 
Bonacich centrality model defines the importance $x_i$ of node $i\in V$ as 

$$
x_i\propto \sum_{j: \, j\to i} x_j = (Ax)_i  \, , 
$$

<!-- $A_  --> 

that is, the importance of node $x_i$ is linearly proportional to the importances $x_j$ of the nodes that points towards $i$. The Perron-Frobenius theory teaches us that, **if the graph is strongly connected**,  only one such vector $x$ exists, the Perron eigenvector of the  adjacency matrix $A x=\rho(A)x$, and it provides us with sufficient conditions to compute such $x$ via the simple Power Method scheme. 

**HITS centrality** Another widely used approach defines two centralities indices, the *hub score* and the *authority score*, via the mutual reinforcing informal idea that *"a node is a good hub if it points to good authorities; and a node is a good authority if it is pointed by good hubs"*. If $x_i$ and $y_i$ are the hub and the authority scores of node $i$, respectively, then  

\begin{equation}\label{eq:sing-vec}
x_i \propto \sum_{j: i\to j}y_j =  (A^\top y)_i \qquad y_i \propto  \sum_{j:j\to i} x_j = (Ax)_i
\end{equation}

<!-- $A_  --> 

Again, by the Perron-Frobenius theorem, **if the graph is strongly connected** there is only one nonnegative solution, the dominant left and right singular vectors of the adjacency matrix.


## Nonlinear eigenvector centrality 
While powerful and useful, these models have two main drawbacks:   

1. they only allow for linear proportionality relations to define the importance model 
1. they may not be unique, even for simple graphs

The nonlinear Perron-Frobenius theory allows us to overcome both these two drawbacks in a very natural way. This will be particularly important when moving to the case of [higher-order networks](#higher-order-networks), as we will discuss next. Here we discuss two simple illustrative examples. 

Suppose $A=I$ is the identity matrix. This is certainly not irreducible and in fact $Ax = x$ for all nonnegative vectors $x\in C_+$. While from a linear algebra point of view there is no preferred nonnegative solution to $x=Ax$, from the graph centrality perspective this is not the case. The graph of $A$ is a set of isolated nodes, each with a self-loop of weight exactly one. Thus, a centrality score for these nodes would assign same score to all the nodes. This corresponds to the eigenvector $x = \one$ of $A$. While this is only one of the nonnegative solutions of $x=Ax$, $\one$ is the only nonlinear Perron eigenvector of a "nonlinear version" of the eigenvalue problem for $A$. Precisely, consider the nonlinear eigenvalue equation

\begin{equation}\label{eq:Af(x)}
\lambda x = A  x^{1-\varepsilon}
\end{equation}

It is easy to verify that the mapping $F(x) := Ax^{1-\varepsilon}$ is (multi)homogeneous with homogeneity matrix the scalar $\M=1-\varepsilon$. Thus, for any $\varepsilon \in (0,1)$, $\rho(\M)<1$ and by the nonlinear Perron-Frobenius theorem we have that $\eqref{eq:Af(x)}$ has a unique positive solution. It is easy to verify that such solution is entrywise constant, yielding the desired centrality assignment. 


A similar situation holds for the singular vector case. Consider the graph in the figure below:

<center>
<img style="width:13em;border-style:solid;border:5px;" src="/tikz-figures/example-graph-hits.png" alt="example-graph" />
</center>

This is a well-known example where HITS centrality may fail to output a reasonable centrality. 
While this graph is not a strongly connected graph, we all most probably agree that node $1$ is the most relevant *hub* while node $6$ is the most relevant *authority*. Despite this simple setting, using the dominant singular vectors of $A$ as in the HITS model may fail to identify these relevant hub and authority nodes. In fact, both the following pairs

\begin{align*}
x = (1,1,1,1,1, 0) \qquad y = (0,1,1,1,1,4)  \\
x = (4, 1, 1, 1, 1, 0) \qquad y =(0,1,1,1,1,1)
\end{align*}

are (up to scaling) singular pairs of the dominant singular value of $A$. This shows that, in the  first case,  the  hub  vector  fails  to  detect  that  node $1$  is  a  better  hub  than  nodes  $2$−$5$.   Similarly,  in  the second case, the authority vector fails to identify node $6$  as  a  the  best  authority. 
Also in this case, a small nonlinear modification of $\eqref{eq:sing-vec}$ solves this issue. Consider the singular vector equation

\begin{equation}\label{eq:nonlin-sing-vec}
\lambda x = A^\top y^\alpha \quad \mu y = A x^\beta\, .
\end{equation}

It is easy to see that any such pair of vectors is an eigenvector of a  multihomogeneous mapping with homogeneity matrix

$$
\M = \begin{bmatrix}0 & \alpha \\ \beta & 0 \end{bmatrix}, \qquad \rho(H) = \sqrt{|\alpha\beta|}
$$

Thus for any $\alpha\beta<1$ the nonlinear eigenvector equation $\eqref{eq:nonlin-sing-vec}$ has a unique solution. Below we show the value of the two solution vectors $x,y$ for different choices of $\alpha$ and $\beta$, showing that these two vectors capture the actual roles of nodes in this example graph. 


        │     │ α = 0.5  │ α = 0.9  │ α = 0.5  │ α = 0.9  │ β = 0.5  │ β = 0.9  │ β = 0.9  │ β = 0.5  │
        │entry│ x1       │ x2       │ x3       │ x4       │ y1       │ y2       │ y3       │ y4       │
        ├-----│----------│----------│----------│----------│----------│----------│----------│----------│
        │ 1   │ 0.386488 │ 0.341489 │ 0.468535 │ 0.243379 │ 0.0      │ 0.0      │ 0.0      │ 0.0      │
        │ 2   │ 0.153378 │ 0.164628 │ 0.132866 │ 0.189155 │ 0.153378 │ 0.164628 │ 0.189155 │ 0.132866 │
        │ 3   │ 0.153378 │ 0.164628 │ 0.132866 │ 0.189155 │ 0.153378 │ 0.164628 │ 0.189155 │ 0.132866 │
        │ 4   │ 0.153378 │ 0.164628 │ 0.132866 │ 0.189155 │ 0.153378 │ 0.164628 │ 0.189155 │ 0.132866 │
        │ 5   │ 0.153378 │ 0.164628 │ 0.132866 │ 0.189155 │ 0.153378 │ 0.164628 │ 0.189155 │ 0.132866 │
        │ 6   │ 0.0      │ 0.0      │ 0.0      │ 0.0      │ 0.386488 │ 0.341489 │ 0.243379 │ 0.468535 │



## Higher-order network models

While graph and networks are ubiquitous in the natural sciences, in many real-world applications we  are confronted with higher-order interaction data. Relational data is full of interactions that happen in groups. For example, friendship relations very often happen in groups that are strictly larger than two individuals.  Moreover, interactions naturally occur on multiple layers, for example  work relations, sport relations, friendship relations, etc.  

To model higher-order interactions we need higher-order network models, which include *multilayer networks*,  where we have a set of networks (so-called layers) with connections internally  and  across the layers, and *non-dyadic networks*, such as hypergraphs or simplicial complexes, where we have access to interactions involving multiple nodes. 


For simplicity, here we consider the following two settings:  

- **Multiplex**: This is a set $\{G_i\}$ of $m$ graphs $G_i=(V,E_i)$ $i=1,\dots,m$, the *layers*, each defined on the same set of nodes but with possibly different edge sets 
- **Hypergraph**: Just like a standard graph, this is a pair $H=(V,\mathcal E)$ where the set of *hyperedges* $\mathcal E$ is such that each $e\in \mathcal E$ can involve an arbitrary number of nodes, rather than just two nodes as in the standard graph case. 

<!-- Here we focus on the hypergraph setting, where  interactions across multiple nodes are described by a hypergraph $H=(V,E)$, made by a set of nodes $V=\{1,\dots,n\}$ and a set of hyperedges $E$ where each $e\in E$ can involve an arbitrary number of nodes, rather than just two nodes as in the standard graph case.  -->

<!-- <center>
<img style="width:8rem" src="../img/coauthorship-hypergraph.png" alt="hypergraph" />
</center> -->







## Eigenvector centrality for multiplex 
A multiplex network $\{G_k\}$ can be naturally described by means of an adjacency tensor $T$ with three modes

$$
T_{ijk} = \begin{cases}
1 & i\to j \text{ on layer }k \\
0 & \text{otherwise}
\end{cases}
$$ 

where  $i\to j$ means that there is an edge from node $i$ to node $j$, i.e. $(i,j)\in E_k$. 

How can we define a mutual reinforcing centrality score for nodes (and layers) in $\{G_k\}$ so that a larger  centrality is assigned to nodes that form  links  with other central nodes in  highly  influential  layers? Here we discuss the model proposed in [@tudisco2017node] based on $T$ and a multihomogeneous order-preserving mapping associated to it.  Other approaches are discussed in [#Related work](#related-work). 

In this model, mutual reinforcement happens at both layer and node levels, as layers are more influential if highly central nodes are active in them. Thus, if $x_i$ denotes the centrality of node $i$ and $y_k$ the influence of layer $k$, we require that 

\begin{equation}\label{eq:tensor_singvec}
\left\{
\begin{array}{l}
    \sum_{j,k}T_{i,j,k}x_jy_k = \lambda \, |x_i|^{p} \mathrm{sign}(x_i)\\[.5em] \sum_{i,j}T_{i,j,k}x_ix_j = \mu\,   |y_k|^{q} \mathrm{sign}(y_k)
\end{array}
\right.
\end{equation}

which imposes that the $p$-power of the importance of node $i$ is proportional to the sum of the importances of the nodes that point at $i$, times the influence of the layer where such connections take place and, similarly, defines the $q$-power of the influence of the layer $k$ as being proportional the product of the centrality of the nodes that are connected in that layer. 

<!-- $$x_i \propto \sum_{jk}\mathcal A_{ijk}x_jy_k \quad  \text{ and } \quad y_k \propto \sum_{ij}\mathcal A_{ijk}x_ix_j$$ -->


Since the centrality score is a positive number it is natural to add the constraint $\lambda,\mu>0$ and $x,y\succ 0$ in $\eqref{eq:tensor_singvec}$. Thus, our centrality problem boils down to a constrained nonlinear system of equations. When $p=q=1$, the equations are homogeneous polynomials and $\eqref{eq:tensor_singvec}$ is directly reminiscent of a singular vector equation. However, unlike the matrix case, even positive tensors may admit multiple solutions here, as shown by the following example:
<!-- ###### A entrywise positive 2x2x2 example -->

<section markdown="block" class="example">
Consider the positive adjacency tensor $T$ with entries 

$$
\left\{
\begin{array}{llll} 
T_{1,1,1} = 6 & T_{1,2,1} = 199/7 & T_{2,1,1} = 16/7 & T_{2,2,1} = 11 \\ 
T_{1,1,2} = 61/7 &  T_{1,2,2} = 6 & T_{2,1,2} = 29 & T_{2,2,2} = 16/7
\end{array}\right.
$$

then both the pair $x = \frac 1 3(2,1)$, $y = \frac 1 3(1,2)$ and the pair $x = \frac 1 4(1,3)$,  $y  = \frac 1 4(3,1)$ are positive solutions to $\eqref{eq:tensor_singvec}$.
</section>


In order to practically use the centrality model $\eqref{eq:tensor_singvec}$ we need it to define a unique score. To this end, we recast the vectors $x,y$ solutions of $\eqref{eq:tensor_singvec}$ as eigenvectors of the multihomogeneous mapping

$$
F(x,y) := \begin{bmatrix} F_1(x,y) \\ F_2(x,y) \end{bmatrix} =  \begin{bmatrix} (T_{(1)}xy)^{1/p} \\ (T_{(3)}xx)^{1/q} \end{bmatrix} = \begin{bmatrix} (\sum_{jk} T_{ijk}  x_jy_k)^{1/p} \\ (\sum_{ij}T_{ijk}x_ix_j)^{1/q} \end{bmatrix}\, .
$$

In fact, it is easy to see that $\eqref{eq:tensor_singvec}$ holds iff $F(x,y)= (\lambda,\mu)\krog  (x,y)$. Moreover, one easily realizes that 

$$
\M = \begin{bmatrix}
1/p & 1/p \\ 2/q & 0
\end{bmatrix}
$$

is the homogeneity matrix of $F$. Thus, using a slightly different cone than $C_+$, one obtains the following:


<!-- Let $\mathcal C = C_+^1\times \dots \times C_+^m$, $x = (x^{(1)}, \dots, x^{(m)}) \in \mathcal C$  -->



<section markdown="block" class="theorem">
**Theorem.** Let $n$ and $\ell$ be the number of nodes and the number of layers in $\{G_k\}$, respectively. Consider the following set of pairs of vectors

\[
C_+(T) =\left\{(x,y)\succeq 0  \quad : \quad 
\begin{array}{c}
 x_i \propto   \textstyle{\sum_{j,k} T_{ijk}}, \quad \forall i = 1, \dots, n\\
 y_k \propto \textstyle{\sum_{i,j} T_{ijk}}, \quad \forall k =1,\dots, \ell
\end{array}\right\}\, .
\]

This is a cone of vectors that depends on the nonzero pattern of $T$: for $(x,y)\in C_+(T)$, $x_i$ is zero if and only if $T_{ijk}=0$ for all $j,k$, that is node $i$ is isolated in all the layers and, similarly, $y_k=0$ if and only if layer $k$ is empty (there is no edge in that layer).  


Then $\rho(\M) = \frac{\sqrt{8p+q}+\sqrt{q}}{2p\sqrt{q}}$ and if $\rho(\M)<1$ we have:

**1.** The system of nonlinear equations $\eqref{eq:tensor_singvec}$ has a unique solution $(x^*,y^*)\in C_+(T)$ such that $\|x^*\|=\|y^*\|=1$. 

**2.** The power method iteration
``` julia
x = ones(n,1) 
y = ones(l,1)
for r = 0,1,2,3,..
        x = F_1(x,y)
        x = x / norm(x)
        y = F_2(x,y)
        y = y / norm(y)
```
converges to $(x^*,y^*)$ and after $m$ steps we have 

$$
\|(x,y)-(x^*,y^*)\|_{\infty} \leq \rho(\M)^m \Big\{ \rho(\M) \, p\, \frac{\max_{i\in\mathcal I} x_i^*}{\min_{i'\in\mathcal I} x_{i'}^*}+\, \frac{\max_{k\in\mathcal J} y_k^*}{\min_{k'\in\mathcal J} y_{k'}^*}\Big\}
$$

with  $\mathcal I=\{i \, : \, x^{*}_i>0\}$ and $\mathcal J =\{k \, :\, y_k^{*}>0\}$.
 
</section>




### Related work 
Other models for eigenvector centrality on multiplex networks are available. 
Many of them are based on a "flattening" or "projection" approach which essentially transforms the multiplex into a graph and uses matrix eigenvectors on that graph to model node importances. These include, the aggregated graph of a multiplex graph [@sola2013eigenvector] [@battiston2014structural] [@zhou2007spectral] [@tsuda2005fast], where multiple layers with adjacency matrices $A_1,\dots, A_m$ are aggregated via a linear (possibly weighted) combination into a single denser  adjacency matrix $A_{\mathrm{agg}} = w_1A_1 + \dots + w_mA_m$;  the supra-adjacency graph of a multilayer graph [@de2013centrality] [@taylor2017eigenvector] [@taylor2021tunable], where a new graph  of larger size is built by taking the Cartesian product of all the layers with weighted layer couplings obtaining a large adjacency matrix   of the form

$$A_{\mathrm{supra}}=
\begin{bmatrix}
A_1 & I & \dots  & I \\
I & \ddots & \ddots &\vdots  \\
\vdots &  \ddots & \ddots & I \\
I & \dots & I & A_m
\end{bmatrix}
$$

Once a standard graph is obtained from the multiplex data, standard techniques can be applied to define and compute mutual-reinforcing centralities. In particular, the classical Perron--Frobenius theory for matrices can be directly applied to the flattened graphs. To this end, it is interesting to notice that 

<!-- <section markdown="block" class="definition"> -->

$$
A_{\mathrm{supra}} \text{  is irreducible } \iff A_{\mathrm{agg}} \text{ is irreducbile}
$$ 

<!-- </section> -->

A different approach is proposed in [@rahmede2018centralities] where the centrality for nodes and layers is computed by summing up powers of entries of the incidence matrix of the multiplex. 





## Node and edge eigenvector centrality for hypergraphs 




### Related work tensor
Unlike flattening models, tensor-based approaches maintain the higher-order structure of the network. Spectral methods for tensor-based mappings have seen a great growth in recent years \cite{li2013z,ng2010finding,hu2013cored,chen2017fiedler,qi2017tensor} and are based on different notions of tensor eigenvectors.

In the non-dyadic setting, tensor-based centrality scores for the nodes of a $k$-uniform hypergraph are defined in e.g.\  \cite{benson2019three,ng2011multirank,zhou2007co,deng2009generalized}. %  in terms of tensor eigenvectors. 
As every hyperedge contains exactly $k$ nodes, we can associate to the hypergraph the adjacency tensor  $\mathcal A$ such that $\mathcal A_{i_1,\dots,i_k} = w(e)$ if the hyperedge $e = \{i_1,\dots,i_k\}$ is in the hypergraph, and $\mathcal A_{i_1,\dots,i_k}=0$ otherwise. %Clearly, $\mathcal A$ coincides with the adjacency matrix of the graph when $k=2$. 
The %tensor-eigenvector 
centrality score $x$  for the nodes of the hypergraph is then defined via the constrained tensor eigenvector equation
% Different notions of tensor eigenvectors are available in the literature (see e.g.,
% \cite{cipolla2019shifted,gautier2019unifying}). In particular, for $p>1$, a $\ell^p$  eigenvector for $\mathcal A$ is a vector $x$ such that 

\begin{equation}\label{eq:tensor_eig}
    \sum_{i_2,\dots,i_k}\mathcal A_{i_1,i_2,\dots,i_k}x_{i_2}x_{i_3}\cdots x_{i_k} = \lambda \, |x_{i_1}|^{p-2}x_{i_1} 
\end{equation}

with $x>0$, $\lambda>0$ and $p>1$.
%The special cases $p=2$ and $p={k}$ correspond to so-called $Z$- and $H$-eigenvectors for $\mathcal A$. %A centrality for the nodes of $H$ is a solution $x$ to \eqref{eq:tensor_eig} such that $x>0$ and $\lambda>0$.










Extending eigenvector centrality to higher-order graph models is nontrivial as it first requires extending standard one-dimensional graph mappings, then generalizing mutual-reinforcing properties via suitable eigenequations and finally providing the supporting mathematics for their well-posedeness and computation. 

A relatively standard way to extend graph mappings and their eigenvectors to the higher-order setting is via a "flattening" or a "projection". These are forms of linearizations where the whole higher-order graph is flattened into a standard graph to which standard centrality models are applied.  There are many approaches that follow this line, including linear-weighted clique expansions [@carletti2020random] [@rodri2002laplacian] [@rodriguez2003laplacian] [@rodriguez2009laplacian] [@agarwal2006higher] [@zhou2007hypergraph]  where hyperedges are replaced by cliques in the flattened graph, whose adjacency matrix becomes 

\begin{equation}\label{eq:clique-expansion-adjacency}
    A_{ij} = \sum_{e: \, i,j\in e}w(e) 
\end{equation}

with $w(e)$ the weights of the original hypergraph; clique averaging  \cite{agarwal2005beyond} , where  the weights $w(e)$ in the sum $\eqref{eq:clique-expansion-adjacency}$  are averaged with generalized mean functions;  connectivity graph expansion \cite{banerjee2021spectrum,de2021phase}, where the weights in the clique expansion are based on hyperedge degrees, for example replacing $w(e)$ with $1/(|e|-1)$ in \eqref{eq:clique-expansion-adjacency}; the  star expansion \cite{zien1999multilevel}, where the flattened graph is obtained by introducing new vertices for each hyperedge, which are then connected according to the hypergraph structure;   








\bibliography

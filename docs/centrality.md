# Network centrality

Ranking the nodes of a network according to suitable "centrality measures" is a recurring and fundamental question in network science and data mining.  Among the various  network centrality models,  the class of **eigenvector centrality** is one of the most widely used and effective. This family of models  dates back to the 19th Century when it was proposed as a mean to rank professional chess players by Edmund Landau[@schaf2019landau] and was then  popularized in the network science community starting from the late '80s with Bonacich[@bonacich1987eig], PageRank[@page1999pagerank] and HITS[@K99] models. 

This class of scores assigns importances to the nodes of a graph, based on the leading eigenvector $x$ (or the leading singular vectors $x,y$) of suitable network matrices and strongly rely on the matrix Perron-Frobenius theorem. 
One of the keys of the success of eigenvector  centralities is that they naturally incorporate **mutual reinforcement**: important objects are those that interact with many other important objects. For example, when $G=(V,E)$ is a graph with adjacency matrix $A$, Bonacich centrality model defines the importance $x_i$ of node $i\in V$ as 

$$
x_i\propto \sum_{j: \, ij\in E} A_{ij} \, x_j\, ,
$$

that is, the importance of node $x_i$ is linearly proportional to the importances $x_j$ of the nodes it shares an edge with. The Perron-Frobenius theory teaches us that only one such vector $x$ exists, the Perron eigenvector of the adjacency matrix $Ax=\rho(A)x$, and it provides us with sufficient conditions to compute such $x$ via the simple Power Method scheme.



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







## Node and layer eigenvector centrality for multiplex 
A multiplex network $\{G_k\}$ can be naturally described by means of an adjacency tensor $\mathcal A$ with three modes

$$
\mathcal A_{ijk} = \begin{cases}
\omega_k(ij) & i\to j \text{ on layer }k \\
0 & \text{otherwise}
\end{cases}
$$ 

where $\omega_k:E_k\to \mathbb R_{>0}$ is a positive weight function for the edges of the $k$-th layer and $i\to j$ means that there is an edge from node $i$ to node $j$, i.e. $i,j\in E_k$. 

How can we define a mutual reinforcing centrality score for nodes (and layers) in $\{G_k\}$ so that a larger  centrality is assigned to nodes that form  links  in  highly  influential  layers with other central nodes? Here we discuss the model proposed in [@tudisco2017node] based on $T$ and a multihomogeneous order-preserving mapping associated to it.  Other approaches are discussed in [#Related work](#related-work). 

In this model, mutual reinforcement happens at both layer and node levels, as layers are more influential if highly central nodes are active in them. Thus, if $x_i$ denotes the centrality of node $i$ and $y_k$ the influence of layer $k$, we require that 

\begin{equation}\label{eq:tensor_singvec}
\left\{
\begin{array}{l}
    \sum_{j,k}\mathcal A_{i,j,k}x_jy_k = \lambda \, |x_i|^{p} \mathrm{sign}(x_i)\\[.5em] \sum_{i,j}\mathcal A_{i,j,k}x_ix_j = \mu\,   |y_k|^{q} \mathrm{sign}(y_k)
\end{array}
\right.
\end{equation}

which imposes that the $p$-power of the importance of node $i$ is proportional to the sum of the importances of the nodes that point at $i$, times the influence of the layer where such connections take place and, similarly, defines the $q$-power of the influence of the layer $k$ as being proportional the product of the centrality of the nodes that are connected in that layer. 

<!-- $$x_i \propto \sum_{jk}\mathcal A_{ijk}x_jy_k \quad  \text{ and } \quad y_k \propto \sum_{ij}\mathcal A_{ijk}x_ix_j$$ -->


Since the centrality score is a positive number it is natural to add the constraint $\lambda,\mu>0$ and $x,y\succ 0$ in $\eqref{eq:tensor_singvec}$. Thus, our centrality problem boils down to a constrained nonlinear system of equations. When $p=q=1$, the equations are homogeneous polynomials and $\eqref{eq:tensor_singvec}$ is directly reminiscent of a singular vector equation. However, unlike the matrix case, even positive tensors may admit multiple solutions here, as shown by the following example:
<!-- ###### A entrywise positive 2x2x2 example -->

<section markdown="block" class="example">
Consider the positive adjacency tensor $\mathcal A$ with entries 

$$
\left\{
\begin{array}{llll} 
\mathcal A_{1,1,1} = 6 & \mathcal A_{1,2,1} = 199/7 & \mathcal A_{2,1,1} = 16/7 & \mathcal A_{2,2,1} = 11 \\ 
\mathcal A_{1,1,2} = 61/7 &  \mathcal A_{1,2,2} = 6 & \mathcal A_{2,1,2} = 29 & \mathcal A_{2,2,2} = 16/7
\end{array}\right.
$$

then both the pair  AAAAAAAAA 
$x = \frac 1 3(2,1)$, $y = \frac 1 3(1,2)$ and the pair $x = \frac 1 4(1,3)$,  $y  = \frac 1 4(3,1)$ are positive solutions to $\eqref{eq:tensor_singvec}$.
</section>


In order to practically use the centrality model $\eqref{eq:tensor_singvec}$ we need it to define a unique score. To this end, we recast the vectors $x,y$ solutions of $\eqref{eq:tensor_singvec}$ as eigenvectors of the multihomogeneous mapping

$$
F(x,y) := \begin{bmatrix} (\mathcal A_{(1)}xy)^{1/p} \\ (\mathcal A_{(3)}xx)^{1/q} \end{bmatrix} = \begin{bmatrix} (\sum_{jk} \mathcal A_{ijk}  x_jy_k)^{1/p} \\ (\sum_{ij}\mathcal A_{ijk}x_ix_j)^{1/q} \end{bmatrix}\, .
$$

In fact, it is easy to see that $\eqref{eq:tensor_singvec}$ holds iff $F(x,y)= (\lambda,\mu)\otimes (x,y)$. Moreover, one easily realizes that 

$$
H = \begin{bmatrix}
1/p & 1/p \\ 2/q & 0
\end{bmatrix}
$$

is the homogeneity matrix of $F$. Thus, using a slightly different cone than $C_+$, one obtains the following:

 
<section markdown="block" class="theorem">
**Theorem.** Let ....
</section>


### Related work 

Extending eigenvector centrality to higher-order graph models is nontrivial as it first requires extending standard one-dimensional graph mappings, then generalizing mutual-reinforcing properties via suitable eigenequations and finally providing the supporting mathematics for their well-posedeness and computation. 

A relatively standard way to extend graph mappings and their eigenvectors to the higher-order setting is via a "flattening" or a "projection". These are forms of linearizations where the whole higher-order graph is flattened into a standard graph to which standard centrality models are applied.  There are many approaches that follow this line, including linear-weighted clique expansions [@carletti2020random] [@rodri2002laplacian] [@rodriguez2003laplacian] [@rodriguez2009laplacian] [@agarwal2006higher] [@zhou2007hypergraph]  where hyperedges are replaced by cliques in the flattened graph, whose adjacency matrix becomes 

\begin{equation}\label{eq:clique-expansion-adjacency}
    A_{ij} = \sum_{e: \, i,j\in e}w(e) 
\end{equation}

with $w(e)$ the weights of the original hypergraph; clique averaging  \cite{agarwal2005beyond} , where  the weights $w(e)$ in the sum $\eqref{eq:clique-expansion-adjacency}$  are averaged with generalized mean functions;  connectivity graph expansion \cite{banerjee2021spectrum,de2021phase}, where the weights in the clique expansion are based on hyperedge degrees, for example replacing $w(e)$ with $1/(|e|-1)$ in \eqref{eq:clique-expansion-adjacency}; the  star expansion \cite{zien1999multilevel}, where the flattened graph is obtained by introducing new vertices for each hyperedge, which are then connected according to the hypergraph structure;   


\bibliography










### Node and edge eigenvector centrality for hypergraphs 



#### Related work tensor
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

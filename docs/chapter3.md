# Node and layer eigenvector centrality for multiplex 
A multiplex network $\{G_k\}$ can be naturally described by means of an adjacency tensor $\mathcal A$ with three modes

$$
\mathcal A_{ijk} = \begin{cases}
\omega_k(ij) & i\to j \text{ on layer }k \\
0 & \text{otherwise}
\end{cases}
$$ 

where $\omega_k:E_k\to \RR_{++}$ is a positive weight function for the edges of the $k$-th layer and $i\to j$ means that there is an edge from node $i$ to node $j$, i.e. $i,j\in E_k$. 

How can we define a mutual reinforcing centrality score for nodes (and layers) in $\{G_k\}$ so that a larger  centrality is assigned to nodes that form  links  in  highly  influential  layers with other central nodes? Here we discuss the model proposed in [@tudisco2017node] based on $\mathcal A$ and a multihomogeneous order-preserving mapping associated to it.  Other approaches are discussed briefly in [:material-format-section:Related work](#related-work). 

In this model, mutual reinforcement happens at both layer and node levels, as layers are more influential if highly central nodes are active in them. Thus, if $x_i$ denotes the centrality of node $i$ and $y_k$ the influence of layer $k$, we require that 

<center>
$x_i \propto \sum_{jk}\mathcal A_{ijk}x_jy_k$, and $y_k \propto \sum_{ij}\mathcal A_{ijk}x_ix_j$
</center>

Since the centrality score is


## Related work 

Extending eigenvector centrality to higher-order graph models is nontrivial as it first requires extending standard one-dimensional graph mappings, then generalizing mutual-reinforcing properties via suitable eigenequations and finally providing the supporting mathematics for their well-posedeness and computation. 

A relatively standard way to extend graph mappings and their eigenvectors to the higher-order setting is via a "flattening" or a "projection". These are forms of linearizations where the whole higher-order graph is flattened into a standard graph to which standard centrality models are applied.  There are many approaches that follow this line, including linear-weighted clique expansions \cite{carletti2020random,rodri2002laplacian,rodriguez2003laplacian,rodriguez2009laplacian,agarwal2006higher,zhou2007hypergraph}, where hyperedges are replaced by cliques in the flattened graph, whose adjacency matrix becomes 

\begin{equation}\label{eq:clique-expansion-adjacency}
    A_{ij} = \sum_{e: \, i,j\in e}w(e) 
\end{equation}

with $w(e)$ the weights of the original hypergraph; clique averaging \cite{agarwal2005beyond}, where  the weights $w(e)$ in the sum \eqref{eq:clique-expansion-adjacency}  are averaged with generalized mean functions;  connectivity graph expansion \cite{banerjee2021spectrum,de2021phase}, where the weights in the clique expansion are based on hyperedge degrees, for example replacing $w(e)$ with $1/(|e|-1)$ in \eqref{eq:clique-expansion-adjacency}; the  star expansion \cite{zien1999multilevel}, where the flattened graph is obtained by introducing new vertices for each hyperedge, which are then connected according to the hypergraph structure;   


\bibliography

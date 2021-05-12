# Optimization with nonlinear Perron eigenvectors




The connection between eigenvalue problems and constrained optimization is relatively standard. For example, the singular value equations $M y = \lambda x$, $M^\top x = \lambda y$ of a matrix $M$  always admit a variational characterization which connects the solutions of
 
<!-- \begin{equation*}\label{eq:matrix-singular-vectors}
    M y = \lambda x, \qquad 
    M^\top x = \lambda y
\end{equation*} -->

$$
    \begin{cases}
    M y = \lambda x & \\
    M^\top x = \lambda y
    \end{cases}
$$

with the constrained optimization problem 

<!-- with the critical points of the quadratic functional  

\begin{equation}\label{eq:matrix-variational-problem}
    \varphi(x,y) = x^\top M y
\end{equation}
$\varphi(x,y) = x^\top M y$ subject to $\|x\|=\|y\|=1$.   -->

$$
\left\{
\begin{array}{ll}
\text{optimize} & \varphi(x,y) = x^\top M y \\[.4em]
\text{subject to}& \|x\|=1 \text{ and } \|y\|=1
\end{array}
\right. 
$$


So, the global optimum of $\varphi$ is given by the extreme left and right singular vectors of $M$. This relatively simple connection has lead to powerful numerical optimizers in recent years, see e.g. [@adachi2017solving] [@adachi2019eigenvalue] [@sakaue2016solving]. 





\bibliography

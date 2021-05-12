<!-- ---
hide:
  - navigation # Hide navigation
  - toc        # Hide table of contents
--- -->

# Applied Nonlinear Perron-Frobenius Theory 

## SIAM LA and ILAS 21 Conferences Tutorial  



Nonnegative matrices are pervasive in data miningapplications. For example, distance andsimilarity matrices are fundamental tools for dataclassification, affinity matrices are keyinstruments for graph matching, adjacency matricesare at the basis of almost every graphmining algorithm, transition matrices are the maintool for studying stochastic processes ondata. The Perron-Frobenius theory makes the algorithmsbased on these matrices veryattractive from a linear algebra point of view.At the same time, as the available data grows bothin terms of size and complexity, more andmore data mining methods rely on nonlinear mappingsrather than just matrices, whichhowever still have some notion of nonnegativity.The nonlinear Perron-Frobenius theory allows us totransfer most of the theoretical andcomputational niceties of nonnegative matrices tothe much broader class of nonlinearmultihomogeneous operators. These types of operatorsinclude for example commonly usedmaps associated with tensors and are tightly connectedto the formulation of nonlineareigenvalue problems with eigenvector nonlinearities.
In this minitutorial we will introduce the concept of multihomogeneous operators and we willpresent the state-of-the-art version of the nonlinearPerron-Frobenius theorem fornonnegative nonlinear mappings. We will discuss severalnumerical optimization implicationsconnected to nonlinear and higher-order versions ofthe Power and the Sinkhorn methodsand several open challenges, both from the theoreticaland the computational viewpoints.We will also discuss numerous problems in data mining,machine learning and networkscience which can be cast in terms of nonlinear eigenvectorproblems and we will show howthe nonlinear Perron-Frobenius theory can help solvethem.




<br> 
Welcome to the webpage dedicated to the SIAM minitutorial on *Applied Nonlinear Perron-Frobenius Theory*. The page is developed and maintained by [Antoine Gautier]() and [Francesco Tudisco](https://ftudisco.gitlab.io/). 



## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.

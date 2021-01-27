var documenterSearchIndex = {"docs":
[{"location":"man/datasets/#Datasets","page":"Datasets","title":"Datasets","text":"","category":"section"},{"location":"man/datasets/","page":"Datasets","title":"Datasets","text":"Collection of datasets to demostrate the use of Time Series analysis","category":"page"},{"location":"man/datasets/#co2","page":"Datasets","title":"co2","text":"","category":"section"},{"location":"man/datasets/","page":"Datasets","title":"Datasets","text":"Atmospheric Carbon Dioxide Dry Air Mole Fractions from quasi-continuous measurements at Mauna Loa, Hawaii.","category":"page"},{"location":"man/datasets/","page":"Datasets","title":"Datasets","text":"co2","category":"page"},{"location":"man/datasets/#Forecast.co2","page":"Datasets","title":"Forecast.co2","text":"Package: Forecast\n\nco2(full = false)\n\nReturn dataset with atmospheric Carbon Dioxide Dry Air Mole Fractions from quasi-continuous measurements at Mauna Loa, Hawaii.\n\nK.W. Thoning, A.M. Crotwell, and J.W. Mund (2020), Atmospheric Carbon Dioxide Dry Air Mole Fractions from continuous measurements at Mauna Loa, Hawaii, Barrow, Alaska, American Samoa and South Pole. 1973-2019, Version 2020-08 National Oceanic and Atmospheric Administration (NOAA), Global Monitoring Laboratory (GML), Boulder, Colorado, USA https://doi.org/10.15138/yaf1-bk21 FTP path: ftp://aftp.cmdl.noaa.gov/data/greenhouse_gases/co2/in-situ/surface/\n\nArguments\n\nfull: if true Returns full original dataset from 1973 to 2020 in a DataFrame, otherwise returns the subset used in \"STL: A Seasonal-Trend Decomposition Procedure Based on Loess\" from Cleveland et. al. Its default value is false.\n\nReturns\n\nDataframe or TimeArray containing the descrived dataset.\n\nExamples\n\njulia> co2()\n[ Info: Dataset used in Cleveland et al. paper\n4609×1 TimeArray{Union{Missing, Float64},1,Date,Array{Union{Missing, Float64},1}}\n1974-05-17 to 1986-12-31\n│            │ co2     │\n├────────────┼─────────┤\n│ 1974-05-17 │ 333.38  │\n│ 1974-05-18 │ 333.11  │\n│ 1974-05-19 │ 333.46  │\n   [...]\n\n\n\n\n\n","category":"function"},{"location":"man/docstrings/#Docstrings","page":"Docstrings","title":"Docstrings","text":"","category":"section"},{"location":"man/docstrings/","page":"Docstrings","title":"Docstrings","text":"Modules = [Forecast]","category":"page"},{"location":"man/docstrings/#Forecast.Forecast","page":"Docstrings","title":"Forecast.Forecast","text":"Collection of methods for Time Series analysis\n\nMethods implemented:\n\nacf:        Auto-correlation or auto-covariance of univariate series. \nccf:        Cross-correlation or cros-covariance of two univariate series.\nd:          Lagged differences of a given order for Vector, Array and TimeSeries.\nhma:        Henderson moving average filters.\nloess:      Locally estimated scatterplot smoothing.\npacf:       Partial Auto-correlation function.\nsma:        Simple moving average.\nstl:        Seasonal and Trend decomposition using loess.\n\n\n\n\n\n","category":"module"},{"location":"man/docstrings/#Forecast.CCF","page":"Docstrings","title":"Forecast.CCF","text":"Package: Forecast\n\nStore results from the functions acf, ccf and pacf\n\nArguments\n\n`ccf::AbstractArray`    An array with results from ccf, acf and pacf\n`N::Integer`            Length of ccf\n`type::String`          Type of CCF\n`lag::Integer`          Maximum number of lags\n`alpha::Tuple`          CI thresholds\n`ci::Tuple`             CI for alpha\n`auto::Bool`            Auto-correlation\n`call::String`          Method called to generate ccf\n\n\n\n\n\n","category":"type"},{"location":"man/docstrings/#Forecast.STL","page":"Docstrings","title":"Forecast.STL","text":"Package: Forecast\n\nStore results from the function stl\n\nArguments\n\n`ta::TimeArray`    A time array with three time series from a fitted STL model\n`call::String`     method called to generate ta\n\n\n\n\n\n","category":"type"},{"location":"man/docstrings/#Forecast.acf-Tuple{TimeSeries.TimeArray}","page":"Docstrings","title":"Forecast.acf","text":"Package: Forecast\n\nacf(x::{AbstractVector,TimeArray},\n    type = \"cor\",\n    lag = Integer(ceil(10*log10(length(x)))),\n    alpha = (0.95,0.99))\n\nCompute the auto-correlation or auto-covariance for an univariate series.\n\nThe results are normalized to preserve homoscedasticity. The distribution used to normalize the data is an approximation of a Fisher Transformation via a Normal Distribution. There is a plot recipe for the returned object, if the type is cor the plot will also show confidence intervals for the given alpha values.\n\nArguments\n\nx: Vector or uni-dimensional TimeArray of data.\ntype: Valid values are \"cor\" for correlation (default) and \"cov\" for convariance.\nlag: Maximum number of lags.\nalpha: A tuple with two thresholds (t1,t2) with t1 <= t2 to plot confidence intervals. The default values are 0.95 and 0.99.\n\nReturns\n\nA CCF object.\n\nExamples\n\njulia> x = rand(100);\nres = acf(x1; type=\"cor\");\nplot(res)\n\n\n\n\n\n","category":"method"},{"location":"man/docstrings/#Forecast.ccf-Tuple{TimeSeries.TimeArray,TimeSeries.TimeArray}","page":"Docstrings","title":"Forecast.ccf","text":"Package: Forecast\n\nccf(x1::{AbstractVector,TimeArray},\n    x2::{AbstractVector,TimeArray};\n    type = \"cor\",\n    lag = Integer(ceil(10*log10(length(x1)))),\n    alpha = (0.95,0.99))\n\nCompute the cross-correlation or cros-covariance of two univariate series.\n\nThe results are normalized to preserve homoscedasticity. The distribution used to normalize the data is an approximation of a Fisher Transformation via a Normal Distribution. There is a plot recipe for the returned object, if the type is cor the plot will also show confidence intervals for the given alpha values.\n\nIf, for a given integer k, x2 repeats x1 values such that x1[t] = x2[t+k] for all i then high correlation value will be placed at the right from the center in the results. That is, this convention will be represented in the plots as x1_t = x2_{t+k} -> _____0__k__ meaning x2 behavior can be predicted by x1 in k units.\n\nArguments\n\nx1: Vector or uni-dimensional TimeArray of data.\nx2: Vector or uni-dimensional TimeArray of data.\ntype: Valid values are \"cor\" for correlation (default) and \"cov\" for convariance.\nlag: Maximum number of lags.\nalpha: A tuple with two thresholds (t1,t2) with t1 <= t2 to plot confidence intervals. The default values are 0.95 and 0.99.\n\nReturns\n\nA CCF object. \n\nExamples\n\njulia> x1 = rand(100);\nx2 = circshift(x1,6);\nres = ccf(x1, x2; type=\"cor\");\nplot(res)\n\n\n\n\n\n","category":"method"},{"location":"man/docstrings/#Forecast.co2","page":"Docstrings","title":"Forecast.co2","text":"Package: Forecast\n\nco2(full = false)\n\nReturn dataset with atmospheric Carbon Dioxide Dry Air Mole Fractions from quasi-continuous measurements at Mauna Loa, Hawaii.\n\nK.W. Thoning, A.M. Crotwell, and J.W. Mund (2020), Atmospheric Carbon Dioxide Dry Air Mole Fractions from continuous measurements at Mauna Loa, Hawaii, Barrow, Alaska, American Samoa and South Pole. 1973-2019, Version 2020-08 National Oceanic and Atmospheric Administration (NOAA), Global Monitoring Laboratory (GML), Boulder, Colorado, USA https://doi.org/10.15138/yaf1-bk21 FTP path: ftp://aftp.cmdl.noaa.gov/data/greenhouse_gases/co2/in-situ/surface/\n\nArguments\n\nfull: if true Returns full original dataset from 1973 to 2020 in a DataFrame, otherwise returns the subset used in \"STL: A Seasonal-Trend Decomposition Procedure Based on Loess\" from Cleveland et. al. Its default value is false.\n\nReturns\n\nDataframe or TimeArray containing the descrived dataset.\n\nExamples\n\njulia> co2()\n[ Info: Dataset used in Cleveland et al. paper\n4609×1 TimeArray{Union{Missing, Float64},1,Date,Array{Union{Missing, Float64},1}}\n1974-05-17 to 1986-12-31\n│            │ co2     │\n├────────────┼─────────┤\n│ 1974-05-17 │ 333.38  │\n│ 1974-05-18 │ 333.11  │\n│ 1974-05-19 │ 333.46  │\n   [...]\n\n\n\n\n\n","category":"function"},{"location":"man/docstrings/#Forecast.d-Tuple{AbstractArray{T,1} where T}","page":"Docstrings","title":"Forecast.d","text":"Package: Forecast\n\nfunction d(x::{AbstractVector,AbstractArray,TimeArray};\n           order::Int=1,\n           lag::Int=1,\n           center::Bool=false)\n\nReturn Lagged differences of a given order for Vector, Array and TimeSeries.\n\nArguments\n\nx: Vector or Array of data.\norder: Order of the differences; number of recursive iterations on the same vector/array.\nlag: Lag for the difference.\ncenter: Center the result in the response using Missing values.\n\nReturns\n\nLagged differences Vector or Array of a given order.\n\nExamples\n\njulia> x = [1,2,3,4,5];\njulia> d(x)\n4-element Array{Int64,1}:\n 1\n 1\n 1\n 1\n\njulia> d(x; order=2)\n3-element Array{Int64,1}:\n 0\n 0\n 0\n\njulia> d(x; order=1, lag=2)\n3-element Array{Int64,1}:\n 2\n 2\n 2\n\njulia> x = reshape(collect(1:20),10,2)\n10×2 Array{Int64,2}:\n  1  11\n  2  12\n  3  13\n  4  14\n  5  15\n  6  16\n  7  17\n  8  18\n  9  19\n 10  20 \n\njulia> d(x; order=2, lag=2)\n7×2 Array{Any,2}:\n 2  2\n 2  2\n 2  2\n 2  2\n 2  2\n 2  2\n 2  2\n\njulia> d(co2())\n[ Info: Dataset used in Cleveland et al. paper\n4608×1 TimeArray{Any,1,Date,Array{Any,1}} 1974-05-17 to 1986-12-30\n│            │ A       │\n├────────────┼─────────┤\n│ 1974-05-17 │ -0.27   │\n│ 1974-05-18 │ 0.35    │\n│ 1974-05-19 │ 0.18    │\n   ⋮\n│ 1986-12-28 │ 0.04    │\n│ 1986-12-29 │ -0.12   │\n│ 1986-12-30 │ missing │\n\n\n\n\n\n","category":"method"},{"location":"man/docstrings/#Forecast.hma-Tuple{AbstractArray{#s24,N} where N where #s24<:Number,Int64}","page":"Docstrings","title":"Forecast.hma","text":"Package: Forecast\n\nhma(s, n)\n\nApplies the Henderson moving average filter to dataset s with n-term.\n\nInformation about involved processes and application can be found at the following:\n\n(\"Time Series Analysis: The Process of Seasonal Adjustment\")[https://www.abs.gov.au/websitedbs/d3310114.nsf/4a256353001af3ed4b2562bb00121564/5fc845406def2c3dca256ce100188f8e!OpenDocument] Australian Bureau of Statistics\n\nArguments\n\ns: Observations' support.\nn: Observation values.\n\nReturns\n\nAn array of Henderson filter smoothed values provided in s.\n\nExamples\n\njulia> hma(rand(24), 13)\n24-element Array{Float64,1}:\n[...]\n\n\n\n\n\n","category":"method"},{"location":"man/docstrings/#Forecast.loess-Tuple{Any,Any}","page":"Docstrings","title":"Forecast.loess","text":"Package: Forecast\n\nloess(xv,yv;\n      d=2,\n      q=Int64(round(3/4*length(xv))),\n      rho=repeat([1.0],inner=length(xv)),  \n      predict = xv)\n\nSmooth a vector of observations using locally weighted regressions.\n\nAlthough loess can be used to smooth observations for any given number of independent variables, this implementation is univariate. The speed of loess can be greatly increased by using fast aproximations for the linear fitting calculations, however this implementation calculates only exact results.\n\nThe loess functionality and nomenclature follows the descriptions in:\n\n\"STL: A Seasonal, Trend Decomposition Procedure Based on Loess\" Robert B. Cleveland, William S. Cleveland, Jean E. McRae, and Irma Terpenning. Journal of Official Statistics Vol. 6. No. 1, 1990, pp. 3-73 (c) Statistics Sweden.\n\nArguments\n\nxv: Observations' support.\nyv: Observation values.\nd: Degree of the linear fit, it accepts values 1 or 2.\nq: As q increases loess becomes smoother, when q tends to infinity loess tends to an ordinary least square poynomial fit of degree d. It defaults to the rounding of 3/4 of xv's length.\nrho: Weights expressing the reliability of the observations (e.g. if yi had variances sigma^2*ki where ki where known, the rhoi could be 1/ki). It defaults to 1.0.\npredict: Vector containing the real values to be predicted, by default predicts xv.\n\nReturns\n\nThe loess values for the values contained in predict.\n\nExamples\n\njulia> loess(rand(5), rand(5); predict=rand(10))\n10-element Array{Float64,1}:\n[...]\n\n\n\n\n\n","category":"method"},{"location":"man/docstrings/#Forecast.nextodd-Tuple{Real}","page":"Docstrings","title":"Forecast.nextodd","text":"Package: Forecast\n\nnextodd(x)\n\nReturn the smallest odd integer greater than or equal to x.        \n\n\n\n\n\n","category":"method"},{"location":"man/docstrings/#Forecast.pacf-Tuple{TimeSeries.TimeArray}","page":"Docstrings","title":"Forecast.pacf","text":"Package: Forecast\n\npacf(x::{AbstractVector,TimeArray};\n     type = \"step-real\",\n     lag = Integer(ceil(10*log10(length(x1)))),\n     alpha = (0.95,0.99))\n\nCompute the partial auto-correlation for an univariate series.\n\nThere are two versions; the \"step\" version estimates the auto-regressive parameters of an increasing model, the \"real\" version estimates the actual partial auto-correlation by eliminating the linear information provided by the lags. When using the default type \"stepwise-real\" both versions are calculated.\n\nThe distribution used to estimate the confidence intervals is an approximation of a Fisher Transformation via a Normal Distribution. There is a plot recipe for the returned object.\n\nArguments\n\nx: Vector or uni-dimensional TimeArray of data.\ntype = Valid values are \"stepwise\", \"real\" and \"stepwise-real\".\nlag: Maximum number of lags.\nalpha: A tuple with two thresholds (t1,t2) with t1 <= t2 to plot confidence intervals. The default values are 0.95 and 0.99.\n\nReturns\n\nA CCF object\n\nExamples\n\njulia> x = rand(100);\nres = pacf(x);\nplot(res)\n\n\n\n\n\n","category":"method"},{"location":"man/docstrings/#Forecast.sma-Tuple{Any,Any}","page":"Docstrings","title":"Forecast.sma","text":"Package: Forecast\n\nsma(x, n; center = true)\n\nSmooth a vector of data using a simple moving average.\n\nArguments\n\nx: Vector of data.\nn: Size of the moving average.\ncenter: centers the moving averaged values in the response.\n\nReturns\n\nVector of moving average smoothed values containing missing values to preserve the size of the original vector.\n\nExamples\n\njulia> sma(1:5,3;center=true)\n5-element Array{Any,1}:\n  missing\n 2.0\n 3.0\n 4.0\n  missing\n\n\n\n\n\n","category":"method"},{"location":"man/docstrings/#Forecast.stl-Tuple{TimeSeries.TimeArray,Integer}","page":"Docstrings","title":"Forecast.stl","text":"Package: Forecast\n\nstl(Yv, np; robust=false, \n            nl=nextodd(np), \n            ns=10*length(Yv)+1,\n            nt=nextodd(1.5*np/(1-1.5/ns)), \n            ni=robust ? 1 : 2,\n            no=0,\n            spm=false,\n            qsmp=max(div(np,7),2))\n\nDecompose a time series into trend, seasonal, and remainder components.\n\n\"STL has a simple design that consists of a sequence of applications of the loess smoother; the simplicity allows analysis of the properties of the procedure and allows fast computation, even for very long time series and large amounts of trend and seasonal smoothing. Other features of STL  are specification of amounts of seasonal and trend smoothing that range, in a nearly continous way, from very small amount of smoothing to a very large amount; robust estimates of the trend and seasonal components that are not distorted by aberrant behavior in the data; specification of the period of the seasonal component to any intenger multiple of the time sampling interval greater than one; and the ability to decompose time series with missing values.\"*\n\nAll default values are chosen following the recommendations of the original paper when those were recommended. ns is recommended to be chosen of the basis of knowledge of the time series and on the basis of diagnostic methods; it must nonethelessbe  always odd and at least 7. A default value is not advised on the original paper, instead the same default value used in the stl implementation in R in usere here.\n\nfor no the authors advise 5 (\"safe value\") or 10 (\"near certainty of convergence\") cycles  or a convergence criterion when robustness is required, in this case when robust is true computations stop when convergence is achieved in trend and seasonality.\n\nfor qsmp the authors do not adivise a default but they use a value close to div(np,7).\n\nArguments\n\nnp: Seasonality.\nrobust: Robust stl.\nnl: Smoothing parameter of the low-pass filter.\nns: Smoothing parameter for the seasonal component.\nnt: Smoothing parameter for the trend decomposition.\nni: Number of inner loop cycles.\nno: Number of outer loop cycles.\nspm: Seasonal post-smoothing.\nqsmp: Loess q window for Seasonal post-smoothing.\nverbose: If true shows updates for the Seasonal and Trend convergence.\ncth: Corvengence threshold for Seasonal and Trend.\n\nReturns\n\nAn STL object with the seasonal, trend and remainder components if Yv is an Array and a TimeSeries object with the same components if Yv is a TimeSeries.\n\nSTL: A Seasonal, Trend Decomposition Procedure Based on Loess\" Robert B. Cleveland, William S. Cleveland, Jean E. McRae, and Irma Terpenning. Journal of Official Statistics Vol. 6. No. 1, 1990, pp. 3-73 (c) Statistics Sweden.\n\nExamples\n\njulia> stl(co2(),365; robust=true, spm=true)\n[ Info: Dataset used in Cleveland et al. paper\n[ Info: Corvengence achieved (< 0.01); Stopping computation...\nSTL{TimeSeries.TimeArray{Union{Missing, Float64},2,\nDates.Date,Array{Union{Missing, Float64},2}}}\n(4609×3 TimeSeries.TimeArray{Union{Missing, Float64},2,\nDates.Date,Array{Union{Missing, Float64},2}} 1974-05-17 to 1986-12-31, \n\"stl(Yn, np=365; nl=365, ns=46091, nt=549, ni=1, no=0, spm=true, qsmp=52)\")\n\n\n\n\n\n","category":"method"},{"location":"man/methods/#Methods","page":"Methods","title":"Methods","text":"","category":"section"},{"location":"man/methods/","page":"Methods","title":"Methods","text":"Auto-correlation/covariance function\nCros-correlation/covariance function\nLagged differences of a given order\nLocally Estimated Scatterplot Smoothing (LOESS)\nSeasonal and Trend decomposition based on Loess (STL)\nSimple Moving Average","category":"page"},{"location":"man/methods/#acf","page":"Methods","title":"acf","text":"","category":"section"},{"location":"man/methods/","page":"Methods","title":"Methods","text":"Auto-correlation/covariance function","category":"page"},{"location":"man/methods/","page":"Methods","title":"Methods","text":"acf","category":"page"},{"location":"man/methods/#Forecast.acf","page":"Methods","title":"Forecast.acf","text":"Package: Forecast\n\nacf(x::{AbstractVector,TimeArray},\n    type = \"cor\",\n    lag = Integer(ceil(10*log10(length(x)))),\n    alpha = (0.95,0.99))\n\nCompute the auto-correlation or auto-covariance for an univariate series.\n\nThe results are normalized to preserve homoscedasticity. The distribution used to normalize the data is an approximation of a Fisher Transformation via a Normal Distribution. There is a plot recipe for the returned object, if the type is cor the plot will also show confidence intervals for the given alpha values.\n\nArguments\n\nx: Vector or uni-dimensional TimeArray of data.\ntype: Valid values are \"cor\" for correlation (default) and \"cov\" for convariance.\nlag: Maximum number of lags.\nalpha: A tuple with two thresholds (t1,t2) with t1 <= t2 to plot confidence intervals. The default values are 0.95 and 0.99.\n\nReturns\n\nA CCF object.\n\nExamples\n\njulia> x = rand(100);\nres = acf(x1; type=\"cor\");\nplot(res)\n\n\n\n\n\n","category":"function"},{"location":"man/methods/#ccf","page":"Methods","title":"ccf","text":"","category":"section"},{"location":"man/methods/","page":"Methods","title":"Methods","text":"Cros-correlation/covariance function","category":"page"},{"location":"man/methods/","page":"Methods","title":"Methods","text":"ccf","category":"page"},{"location":"man/methods/#Forecast.ccf","page":"Methods","title":"Forecast.ccf","text":"Package: Forecast\n\nccf(x1::{AbstractVector,TimeArray},\n    x2::{AbstractVector,TimeArray};\n    type = \"cor\",\n    lag = Integer(ceil(10*log10(length(x1)))),\n    alpha = (0.95,0.99))\n\nCompute the cross-correlation or cros-covariance of two univariate series.\n\nThe results are normalized to preserve homoscedasticity. The distribution used to normalize the data is an approximation of a Fisher Transformation via a Normal Distribution. There is a plot recipe for the returned object, if the type is cor the plot will also show confidence intervals for the given alpha values.\n\nIf, for a given integer k, x2 repeats x1 values such that x1[t] = x2[t+k] for all i then high correlation value will be placed at the right from the center in the results. That is, this convention will be represented in the plots as x1_t = x2_{t+k} -> _____0__k__ meaning x2 behavior can be predicted by x1 in k units.\n\nArguments\n\nx1: Vector or uni-dimensional TimeArray of data.\nx2: Vector or uni-dimensional TimeArray of data.\ntype: Valid values are \"cor\" for correlation (default) and \"cov\" for convariance.\nlag: Maximum number of lags.\nalpha: A tuple with two thresholds (t1,t2) with t1 <= t2 to plot confidence intervals. The default values are 0.95 and 0.99.\n\nReturns\n\nA CCF object. \n\nExamples\n\njulia> x1 = rand(100);\nx2 = circshift(x1,6);\nres = ccf(x1, x2; type=\"cor\");\nplot(res)\n\n\n\n\n\n","category":"function"},{"location":"man/methods/#d","page":"Methods","title":"d","text":"","category":"section"},{"location":"man/methods/","page":"Methods","title":"Methods","text":"Lagged differences of a given order","category":"page"},{"location":"man/methods/","page":"Methods","title":"Methods","text":"d","category":"page"},{"location":"man/methods/#Forecast.d","page":"Methods","title":"Forecast.d","text":"Package: Forecast\n\nfunction d(x::{AbstractVector,AbstractArray,TimeArray};\n           order::Int=1,\n           lag::Int=1,\n           center::Bool=false)\n\nReturn Lagged differences of a given order for Vector, Array and TimeSeries.\n\nArguments\n\nx: Vector or Array of data.\norder: Order of the differences; number of recursive iterations on the same vector/array.\nlag: Lag for the difference.\ncenter: Center the result in the response using Missing values.\n\nReturns\n\nLagged differences Vector or Array of a given order.\n\nExamples\n\njulia> x = [1,2,3,4,5];\njulia> d(x)\n4-element Array{Int64,1}:\n 1\n 1\n 1\n 1\n\njulia> d(x; order=2)\n3-element Array{Int64,1}:\n 0\n 0\n 0\n\njulia> d(x; order=1, lag=2)\n3-element Array{Int64,1}:\n 2\n 2\n 2\n\njulia> x = reshape(collect(1:20),10,2)\n10×2 Array{Int64,2}:\n  1  11\n  2  12\n  3  13\n  4  14\n  5  15\n  6  16\n  7  17\n  8  18\n  9  19\n 10  20 \n\njulia> d(x; order=2, lag=2)\n7×2 Array{Any,2}:\n 2  2\n 2  2\n 2  2\n 2  2\n 2  2\n 2  2\n 2  2\n\njulia> d(co2())\n[ Info: Dataset used in Cleveland et al. paper\n4608×1 TimeArray{Any,1,Date,Array{Any,1}} 1974-05-17 to 1986-12-30\n│            │ A       │\n├────────────┼─────────┤\n│ 1974-05-17 │ -0.27   │\n│ 1974-05-18 │ 0.35    │\n│ 1974-05-19 │ 0.18    │\n   ⋮\n│ 1986-12-28 │ 0.04    │\n│ 1986-12-29 │ -0.12   │\n│ 1986-12-30 │ missing │\n\n\n\n\n\n","category":"function"},{"location":"man/methods/#loess","page":"Methods","title":"loess","text":"","category":"section"},{"location":"man/methods/","page":"Methods","title":"Methods","text":"Locally Estimated Scatterplot Smoothing (LOESS)","category":"page"},{"location":"man/methods/","page":"Methods","title":"Methods","text":"loess","category":"page"},{"location":"man/methods/#Forecast.loess","page":"Methods","title":"Forecast.loess","text":"Package: Forecast\n\nloess(xv,yv;\n      d=2,\n      q=Int64(round(3/4*length(xv))),\n      rho=repeat([1.0],inner=length(xv)),  \n      predict = xv)\n\nSmooth a vector of observations using locally weighted regressions.\n\nAlthough loess can be used to smooth observations for any given number of independent variables, this implementation is univariate. The speed of loess can be greatly increased by using fast aproximations for the linear fitting calculations, however this implementation calculates only exact results.\n\nThe loess functionality and nomenclature follows the descriptions in:\n\n\"STL: A Seasonal, Trend Decomposition Procedure Based on Loess\" Robert B. Cleveland, William S. Cleveland, Jean E. McRae, and Irma Terpenning. Journal of Official Statistics Vol. 6. No. 1, 1990, pp. 3-73 (c) Statistics Sweden.\n\nArguments\n\nxv: Observations' support.\nyv: Observation values.\nd: Degree of the linear fit, it accepts values 1 or 2.\nq: As q increases loess becomes smoother, when q tends to infinity loess tends to an ordinary least square poynomial fit of degree d. It defaults to the rounding of 3/4 of xv's length.\nrho: Weights expressing the reliability of the observations (e.g. if yi had variances sigma^2*ki where ki where known, the rhoi could be 1/ki). It defaults to 1.0.\npredict: Vector containing the real values to be predicted, by default predicts xv.\n\nReturns\n\nThe loess values for the values contained in predict.\n\nExamples\n\njulia> loess(rand(5), rand(5); predict=rand(10))\n10-element Array{Float64,1}:\n[...]\n\n\n\n\n\n","category":"function"},{"location":"man/methods/#stl","page":"Methods","title":"stl","text":"","category":"section"},{"location":"man/methods/","page":"Methods","title":"Methods","text":"Seasonal and Trend decomposition based on Loess","category":"page"},{"location":"man/methods/","page":"Methods","title":"Methods","text":"stl","category":"page"},{"location":"man/methods/#Forecast.stl","page":"Methods","title":"Forecast.stl","text":"Package: Forecast\n\nstl(Yv, np; robust=false, \n            nl=nextodd(np), \n            ns=10*length(Yv)+1,\n            nt=nextodd(1.5*np/(1-1.5/ns)), \n            ni=robust ? 1 : 2,\n            no=0,\n            spm=false,\n            qsmp=max(div(np,7),2))\n\nDecompose a time series into trend, seasonal, and remainder components.\n\n\"STL has a simple design that consists of a sequence of applications of the loess smoother; the simplicity allows analysis of the properties of the procedure and allows fast computation, even for very long time series and large amounts of trend and seasonal smoothing. Other features of STL  are specification of amounts of seasonal and trend smoothing that range, in a nearly continous way, from very small amount of smoothing to a very large amount; robust estimates of the trend and seasonal components that are not distorted by aberrant behavior in the data; specification of the period of the seasonal component to any intenger multiple of the time sampling interval greater than one; and the ability to decompose time series with missing values.\"*\n\nAll default values are chosen following the recommendations of the original paper when those were recommended. ns is recommended to be chosen of the basis of knowledge of the time series and on the basis of diagnostic methods; it must nonethelessbe  always odd and at least 7. A default value is not advised on the original paper, instead the same default value used in the stl implementation in R in usere here.\n\nfor no the authors advise 5 (\"safe value\") or 10 (\"near certainty of convergence\") cycles  or a convergence criterion when robustness is required, in this case when robust is true computations stop when convergence is achieved in trend and seasonality.\n\nfor qsmp the authors do not adivise a default but they use a value close to div(np,7).\n\nArguments\n\nnp: Seasonality.\nrobust: Robust stl.\nnl: Smoothing parameter of the low-pass filter.\nns: Smoothing parameter for the seasonal component.\nnt: Smoothing parameter for the trend decomposition.\nni: Number of inner loop cycles.\nno: Number of outer loop cycles.\nspm: Seasonal post-smoothing.\nqsmp: Loess q window for Seasonal post-smoothing.\nverbose: If true shows updates for the Seasonal and Trend convergence.\ncth: Corvengence threshold for Seasonal and Trend.\n\nReturns\n\nAn STL object with the seasonal, trend and remainder components if Yv is an Array and a TimeSeries object with the same components if Yv is a TimeSeries.\n\nSTL: A Seasonal, Trend Decomposition Procedure Based on Loess\" Robert B. Cleveland, William S. Cleveland, Jean E. McRae, and Irma Terpenning. Journal of Official Statistics Vol. 6. No. 1, 1990, pp. 3-73 (c) Statistics Sweden.\n\nExamples\n\njulia> stl(co2(),365; robust=true, spm=true)\n[ Info: Dataset used in Cleveland et al. paper\n[ Info: Corvengence achieved (< 0.01); Stopping computation...\nSTL{TimeSeries.TimeArray{Union{Missing, Float64},2,\nDates.Date,Array{Union{Missing, Float64},2}}}\n(4609×3 TimeSeries.TimeArray{Union{Missing, Float64},2,\nDates.Date,Array{Union{Missing, Float64},2}} 1974-05-17 to 1986-12-31, \n\"stl(Yn, np=365; nl=365, ns=46091, nt=549, ni=1, no=0, spm=true, qsmp=52)\")\n\n\n\n\n\n","category":"function"},{"location":"","page":"What is this about?","title":"What is this about?","text":"CurrentModule = Forecast","category":"page"},{"location":"#What-is-this-about?","page":"What is this about?","title":"What is this about?","text":"","category":"section"},{"location":"","page":"What is this about?","title":"What is this about?","text":"It's about time","category":"page"},{"location":"","page":"What is this about?","title":"What is this about?","text":"Julia package containing utilities intended for Time Series analysis.","category":"page"},{"location":"","page":"What is this about?","title":"What is this about?","text":":warning: This package is under development and its functionality has not been thoroughly tested. Please, consider to report issues if you find any.","category":"page"},{"location":"#List-of-Methods","page":"What is this about?","title":"List of Methods","text":"","category":"section"},{"location":"","page":"What is this about?","title":"What is this about?","text":"Auto-correlation/covariance function\nCros-correlation/covariance function\nLagged differences of a given order\nLocally Estimated Scatterplot Smoothing (LOESS)\nSeasonal and Trend decomposition based on Loess (STL)\nSimple Moving Average","category":"page"},{"location":"#Manual-Outline","page":"What is this about?","title":"Manual Outline","text":"","category":"section"},{"location":"","page":"What is this about?","title":"What is this about?","text":"Pages = [\n    \"man/quickstart.md\",\n    \"man/methods.md\",\n    \"man/datasets.md\",\n    \"man/docstrings.md\",\t\t\n]\nDepth = 1","category":"page"},{"location":"man/quickstart/#Quick-Start","page":"Quick Start","title":"Quick Start","text":"","category":"section"},{"location":"man/quickstart/#Installing-Forecast.jl","page":"Quick Start","title":"Installing Forecast.jl","text":"","category":"section"},{"location":"man/quickstart/","page":"Quick Start","title":"Quick Start","text":"To begin exploring the package functionality type the lines below in the Julia REPL:","category":"page"},{"location":"man/quickstart/","page":"Quick Start","title":"Quick Start","text":"Pkg> add https://github.com/viraltux/Forecast.jl\n\njulia> using Forecast","category":"page"},{"location":"man/quickstart/","page":"Quick Start","title":"Quick Start","text":"Alternatively you can also type:","category":"page"},{"location":"man/quickstart/","page":"Quick Start","title":"Quick Start","text":"julia> using Pkg\n\njulia> Pkg.add(url=\"https://github.com/viraltux/Forecast.jl\")\n\njulia> using Forecast","category":"page"},{"location":"man/quickstart/#LOESS-example","page":"Quick Start","title":"LOESS example","text":"","category":"section"},{"location":"man/quickstart/","page":"Quick Start","title":"Quick Start","text":"The example below compares LOESS result with extrapolated predictions compared to a simple moving average result with a window size of 100.","category":"page"},{"location":"man/quickstart/","page":"Quick Start","title":"Quick Start","text":"using Plots\nusing Forecast\n\nn = 1000\naxb = LinRange(-1/2,pi+1/2,n)\nx = LinRange(0,pi,n)\ny = sin.(x) .+ rand(n)\nscatter(x, y, xlims=(-1/2,pi+1/2), ma=.5, label = \"Data\", color = :grey,size=(800,500))\nplot!(axb,loess(x,y,predict=axb), linewidth = 4, label = \"LOESS\", color = :blue)\nplot!(x,sma(y,100), linewidth = 2, label= \"MA 100\", color = :orange)","category":"page"},{"location":"man/quickstart/#STL-example","page":"Quick Start","title":"STL example","text":"","category":"section"},{"location":"man/quickstart/","page":"Quick Start","title":"Quick Start","text":"For this example we will be using the co2 data used by the creators of STL to demostrate its funcitonality, below we can see such time series.","category":"page"},{"location":"man/quickstart/","page":"Quick Start","title":"Quick Start","text":"using Plots\nusing Forecast\n\nplot(co2(), legend=:bottomright,size=(800,500))","category":"page"},{"location":"man/quickstart/","page":"Quick Start","title":"Quick Start","text":"The parameters used for STL they're also from the orginal paper, a period of 365 days is used (removing leap years extra day), a robust fit is required and seasonality post-smoothing is applied.","category":"page"},{"location":"man/quickstart/","page":"Quick Start","title":"Quick Start","text":"using Plots\nusing Forecast\n\nstl_co2 = stl(co2(),365; robust=true, spm=true)\nplot(stl_co2,size=(800,1000))","category":"page"},{"location":"man/quickstart/","page":"Quick Start","title":"Quick Start","text":"The image below comes from the original paper for comparison purposes.","category":"page"},{"location":"man/quickstart/","page":"Quick Start","title":"Quick Start","text":"<img src=\"../../images/stl.png\" width=\"800px\"/>","category":"page"},{"location":"man/quickstart/#Cros-Correlation-example","page":"Quick Start","title":"Cros-Correlation example","text":"","category":"section"},{"location":"man/quickstart/","page":"Quick Start","title":"Quick Start","text":"Here we cross-correlate two identical series shifted by six positions, the plot shows how the peak correlation is at position six.","category":"page"},{"location":"man/quickstart/","page":"Quick Start","title":"Quick Start","text":"using Plots\nusing Forecast\nusing Random\n\nRandom.seed!(36)\nx1 = rand(100);\nx2 = circshift(x1,6);\nres = ccf(x1, x2; type=\"cor\");\nplot(res,size=(800,500))","category":"page"},{"location":"man/quickstart/#PACF-example","page":"Quick Start","title":"PACF example","text":"","category":"section"},{"location":"man/quickstart/","page":"Quick Start","title":"Quick Start","text":"The pacf function is useful to identify significant parameters in ARIMA models. For instance, in R the default pacf function estimates partial auto-correlation in a stepwise fashion, however in cases where the model is highly correlated with many previous steps this approach identifies the first lag as highly correlated and the rest as near zeroes when, in reality, all partial auto-correlations should be around zero since that's the information left once taken away the linear influence from the all other lags. Below is an example of such effect where the stepwise (in blue) and real (in red) partial auto-correlations are compared for a series where all lags highly correlate to each other.","category":"page"},{"location":"man/quickstart/","page":"Quick Start","title":"Quick Start","text":"using Plots\nusing Forecast\nusing Random\n\nRandom.seed!(36)\nx = collect(1:100) + rand(100)\nres = pacf(x)\nplot(res,size=(800,500))","category":"page"}]
}

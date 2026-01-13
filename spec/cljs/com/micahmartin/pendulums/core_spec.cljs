(ns com.micahmartin.pendulums.core-spec
  (:require-macros [c3kit.wire.spec-helperc :refer [stub-now should-select should-not-select should-have-invoked-ws
                                                    should-have-invoked-ajax-post should-have-invoked-ajax-get]]
                   [speclj.core :refer [after after-all around around-all before before before-all context describe
                                        focus-context focus-describe focus-it it pending should should-be should-be-a
                                        should-be-nil should-be-same should-contain should-end-with should-fail
                                        should-have-invoked should-invoke should-not should-not should-not-be
                                        should-not-be-a should-not-be-nil should-not-be-same should-not-contain
                                        should-not-end-with should-not-have-invoked should-not-invoke
                                        should-not-start-with should-not-throw should-not= should-not==
                                        should-start-with should-throw should< should<= should= should== should>
                                        should>= stub tags with with-all with-stubs xit]])
  (:require [speclj.core]
            [com.micahmartin.pendulums.core :as sut]))

(describe "Core"

  (it "something"
    (should= 1 2))

  )
